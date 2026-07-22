import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';

interface ErrorBoundaryState {
  hasError: boolean;
  error: any;
  errorCount: number;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null, errorCount: 0 };
  }

  static getDerivedStateFromError(error: any): ErrorBoundaryState {
    return { hasError: true, error, errorCount: 0 };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // Log error details only in development
    if (import.meta.env.DEV) {
      console.error('Error Boundary caught an error:', error);
      console.error('Error Info:', errorInfo);
      console.error('Component Stack:', errorInfo.componentStack);
    }
    
    // In production, you could send to error tracking service here
    // Example: Sentry.captureException(error, { contexts: { react: errorInfo } });
    
    // Update error count
    this.setState(prev => ({ errorCount: prev.errorCount + 1 }));
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorCount: 0 });
    window.location.href = '/';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg-page flex items-center justify-center px-4 py-8">
          <div className="max-w-2xl w-full">
            <div className="border-2 border-red-500 rounded-lg p-6 sm:p-8 bg-bg-surface">
              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-red-500 flex-shrink-0" />
                <h1 className="text-2xl sm:text-3xl font-bold text-red-500 font-mono">
                  SOMETHING WENT WRONG
                </h1>
              </div>

              {/* User-Friendly Message (Production) */}
              {!import.meta.env.DEV && (
                <div className="mb-6">
                  <p className="text-neutral-300 mb-3 font-mono text-sm">
                    $ application_error
                  </p>
                  <div className="bg-bg-page p-4 rounded border border-neutral-700 text-neutral-400">
                    <p className="text-sm leading-relaxed">
                      We encountered an unexpected error. This has been logged and our team is notified.
                    </p>
                    <p className="text-sm mt-2 text-neutral-500">
                      Try refreshing the page or return to the home page to continue.
                    </p>
                  </div>
                </div>
              )}

              {/* Diagnostic Info */}
              <div className="mb-6 p-4 bg-bg-page rounded border border-neutral-700">
                <p className="text-neutral-400 font-mono text-sm mb-2">
                  Status: <span className="text-red-400">FAILED</span>
                </p>
                <p className="text-neutral-400 font-mono text-sm">
                  {this.state.errorCount > 1
                    ? `Multiple errors detected (${this.state.errorCount}). Consider reloading the page.`
                    : 'Please try reloading the page or return to home.'}
                </p>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={this.handleReset}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-500 text-bg-page font-semibold rounded hover:bg-primary-700 transition-colors duration-200 font-mono"
                >
                  <RefreshCw className="w-4 h-4" />
                  Reload Page
                </button>
                <a
                  href="/"
                  className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-500 text-primary-500 rounded hover:bg-primary-500 hover:text-bg-page transition-colors duration-200 font-mono"
                >
                  Go to Home
                </a>
              </div>

              {/* Development Debug Info */}
              {import.meta.env.DEV && (
                <div className="mt-6 p-4 bg-bg-page rounded border border-yellow-500/30">
                  <p className="text-yellow-500 font-mono text-xs mb-3">
                    [DEVELOPMENT MODE - DEBUG INFO]
                  </p>
                  <div className="mb-3">
                    <p className="text-neutral-400 font-mono text-xs mb-2">Error Message:</p>
                    <pre className="bg-bg-page p-2 rounded border border-neutral-600 text-red-400 text-xs overflow-auto max-h-32 font-mono whitespace-pre-wrap break-words">
                      {this.state.error?.message || 'Unknown error'}
                    </pre>
                  </div>
                  <div className="mb-3">
                    <p className="text-neutral-400 font-mono text-xs mb-2">Stack Trace:</p>
                    <pre className="bg-bg-page p-2 rounded border border-neutral-600 text-orange-400 text-xs overflow-auto max-h-40 font-mono whitespace-pre-wrap break-words">
                      {this.state.error?.stack || 'No stack trace available'}
                    </pre>
                  </div>
                  <p className="text-neutral-500 font-mono text-xs">
                    Check the browser console for additional component context and error details.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
