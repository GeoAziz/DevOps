export interface CaseStudyMetrics {
  deploymentTime?: { before: string; after: string; improvement: string };
  cost?: { before: string; after: string; reduction: string };
  performance?: { improvement: string };
  availability?: { uptime: string; improvement: string };
  scalability?: { capacity: string; improvement: string };
}

export interface CaseStudy {
  id: number;
  title: string;
  subtitle: string;
  category: 'DevOps' | 'Cloud Infrastructure' | 'Full-Stack';
  featured: boolean;
  timeline: {
    start: string;
    end: string;
    duration: string;
  };
  challenge: string;
  solution: string[];
  impact: string[];
  technologies: string[];
  impactMetrics: CaseStudyMetrics;
  architecture?: {
    components: string[];
    pattern: string;
  };
}

// Case studies are now managed through the content pipeline
// See CONTENT_PIPELINE.md for documentation
export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 1,
    title: "Kubernetes Migration: E-commerce Platform Overhaul",
    subtitle: "Reduced deployment time by 93% and achieved 99.9% uptime SLA",
    category: "DevOps",
    featured: true,
    timeline: {
      start: "Jan 2024",
      end: "Apr 2024",
      duration: "16 weeks"
    },
    challenge:
      "Legacy monolithic application with 45-minute deployments, frequent production incidents with 30+ minute recovery times, scaling issues during traffic spikes, and infrastructure costs spiraling at $2,500/month.",
    solution: [
      "Containerized application using Docker multi-stage builds with optimized image sizes",
      "Migrated infrastructure to AWS EKS managed Kubernetes cluster with auto-scaling node groups",
      "Implemented GitOps workflow using ArgoCD for declarative, version-controlled deployments",
      "Built comprehensive CI/CD pipeline with GitHub Actions, automated testing, and canary deployments",
      "Deployed Prometheus + Grafana + Loki observability stack for production monitoring",
      "Infrastructure-as-Code provisioning with Terraform for reproducible deployments",
      "Implemented automated disaster recovery and backup procedures"
    ],
    impact: [
      "Deployment time: 45 minutes → 3 minutes (93% reduction, sub-5min rollbacks)",
      "Mean Time To Recovery (MTTR): 30 minutes → 5 minutes (83% improvement)",
      "Infrastructure costs: $2,500/month → $1,625/month (35% reduction)",
      "Uptime: 98.5% → 99.9% (0.4% improvement, ~7 hours saved annually)",
      "Incident response time: Automated alerts reduced manual detection by 90%",
      "Scaling capability: From 5 nodes to dynamic scaling 5-50 nodes based on demand"
    ],
    technologies: ["AWS EKS", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "Loki"],
    impactMetrics: {
      deploymentTime: {
        before: "45 minutes",
        after: "3 minutes",
        improvement: "93%"
      },
      cost: {
        before: "$2,500/month",
        after: "$1,625/month",
        reduction: "35%"
      },
      availability: {
        uptime: "99.9%",
        improvement: "1.4%"
      },
      scalability: {
        capacity: "5-50 nodes dynamic",
        improvement: "10x scaling capability"
      }
    },
    architecture: {
      pattern: "Microservices on Kubernetes with GitOps CI/CD",
      components: ["EKS Cluster", "Docker Registry", "GitHub Actions", "ArgoCD", "Prometheus", "Grafana", "Loki", "Ingress Controller"]
    }
  },
  {
    id: 2,
    title: "Multi-Cloud Infrastructure Automation with IaC",
    subtitle: "Standardized deployment across AWS and Azure with 100% reproducibility",
    category: "Cloud Infrastructure",
    featured: true,
    timeline: {
      start: "May 2024",
      end: "Aug 2024",
      duration: "12 weeks"
    },
    challenge:
      "Infrastructure management spread across two cloud providers with inconsistent configurations, manual deployment processes prone to human error, lack of disaster recovery capabilities, and compliance documentation gaps.",
    solution: [
      "Designed and implemented Terraform modules for both AWS and Azure infrastructure",
      "Created standardized VPC/network architecture following security best practices",
      "Automated security group and IAM policy configurations using Terraform",
      "Built reusable modules for compute, storage, networking, and database resources",
      "Implemented state management using remote Terraform backends with locking",
      "Created comprehensive infrastructure documentation and runbooks",
      "Set up automated compliance checking using Terraform validation and policy-as-code"
    ],
    impact: [
      "Deployment consistency: Manual processes → 100% code-driven (zero drift)",
      "Provisioning time: 8 hours manual → 15 minutes automated (97% reduction)",
      "Configuration errors: 12 incidents/quarter → 0 infrastructure-related incidents",
      "Onboarding new environments: 2 days → 30 minutes",
      "Compliance coverage: 60% documented → 100% compliant and auditable",
      "Cost optimization: Infrastructure wastage reduced by 22% through resource tagging",
      "Disaster recovery RTO: Undefined → 30 minutes, RPO: 1 hour"
    ],
    technologies: ["Terraform", "AWS", "Azure", "GitLab CI", "HCL", "Ansible", "CloudFormation"],
    impactMetrics: {
      deploymentTime: {
        before: "8 hours",
        after: "15 minutes",
        improvement: "97%"
      },
      cost: {
        before: "$45,000/month",
        after: "$35,100/month",
        reduction: "22%"
      },
      performance: {
        improvement: "100% infrastructure reproducibility"
      },
      availability: {
        uptime: "99.95%",
        improvement: "Disaster recovery RTO 30min"
      }
    },
    architecture: {
      pattern: "Multi-cloud IaC with modular Terraform",
      components: ["Terraform Modules", "AWS VPC", "Azure VNets", "IAM/RBAC", "GitLab CI", "Remote State"]
    }
  },
  {
    id: 3,
    title: "Production Observability Stack Implementation",
    subtitle: "Built real-time monitoring and alerting reducing incident detection time by 87%",
    category: "DevOps",
    featured: false,
    timeline: {
      start: "Mar 2024",
      end: "Jun 2024",
      duration: "13 weeks"
    },
    challenge:
      "Production environment lacked observability, incidents discovered only after customer complaints with average detection lag of 15+ minutes, no centralized logging, limited metrics visibility, and incident investigation took hours without proper traces.",
    solution: [
      "Deployed Prometheus for metrics collection with service discovery auto-configuration",
      "Set up Grafana dashboards with 20+ custom visualizations for key infrastructure metrics",
      "Implemented centralized logging using Loki for efficient log aggregation and searching",
      "Configured alerting rules with multiple notification channels (Slack, PagerDuty, email)",
      "Installed Jaeger for distributed tracing across microservices",
      "Created SLO/SLI framework aligned with business objectives",
      "Built runbooks and alert escalation procedures"
    ],
    impact: [
      "Incident detection: Manual → Automated alerts (87% faster detection)",
      "Average detection time: 15+ minutes → 45 seconds",
      "Mean Time To Resolution (MTTR): 90 minutes → 25 minutes (72% improvement)",
      "On-call efficiency: 8 hours investigation time → 20 minutes with proper traces",
      "Alert accuracy: 40% false positives → 5% with tuned thresholds",
      "Dashboard coverage: 0 dashboards → 25+ production monitoring dashboards",
      "Compliance auditing: Manual log review → Automated retention and searchability"
    ],
    technologies: ["Prometheus", "Grafana", "Loki", "Jaeger", "AlertManager", "Node Exporter", "kube-state-metrics"],
    impactMetrics: {
      deploymentTime: {
        before: "15 minutes",
        after: "45 seconds",
        improvement: "95%"
      },
      performance: {
        improvement: "87% faster incident detection"
      },
      availability: {
        uptime: "99.88%",
        improvement: "MTTR reduced 72%"
      },
      scalability: {
        capacity: "Handles 100K+ metrics/sec",
        improvement: "Scales to 50+ services"
      }
    },
    architecture: {
      pattern: "Observability stack with centralized monitoring and logging",
      components: ["Prometheus Server", "Grafana", "Loki", "Jaeger", "AlertManager", "Log Forwarder"]
    }
  },
  {
    id: 4,
    title: "GitOps-Driven Microservices Deployment Pipeline",
    subtitle: "Achieved zero-downtime deployments with 50+ services across 5 environments",
    category: "DevOps",
    featured: false,
    timeline: {
      start: "Feb 2024",
      end: "May 2024",
      duration: "14 weeks"
    },
    challenge:
      "Manual deployments causing business disruptions, inconsistent environment configurations, difficult rollback procedures, lack of deployment visibility, and slow feature release cycle (weekly to bi-weekly).",
    solution: [
      "Implemented GitOps workflow using ArgoCD for declarative state management",
      "Created Git repository structure with environment-specific configurations",
      "Configured automated canary and blue-green deployment strategies",
      "Set up continuous deployment trigger based on Git commits",
      "Implemented automated rollback on deployment failures",
      "Created audit trail with full Git history for compliance",
      "Built promotion pipeline: dev → staging → production"
    ],
    impact: [
      "Deployment frequency: Weekly → 50+ deployments per day",
      "Zero-downtime deployments: 0% → 100%",
      "Rollback time: 30 minutes → 2 minutes (93% improvement)",
      "Deployment success rate: 85% → 99.5%",
      "Environment consistency: 60% parity → 100% identical",
      "Manual errors: 8 incidents/month → 0 process-related incidents",
      "Release velocity: 14-day cycle → Daily deployments with canary validation"
    ],
    technologies: ["ArgoCD", "GitHub", "Kubernetes", "Docker", "Helm", "Kustomize", "GitHub Actions"],
    impactMetrics: {
      deploymentTime: {
        before: "4 hours",
        after: "8 minutes",
        improvement: "97%"
      },
      cost: {
        before: "$12,000/month",
        after: "$9,800/month",
        reduction: "18%"
      },
      performance: {
        improvement: "50+ deployments/day at 99.5% success rate"
      },
      availability: {
        uptime: "99.95%",
        improvement: "Zero-downtime deployment capability"
      }
    },
    architecture: {
      pattern: "GitOps with ArgoCD for declarative Kubernetes deployments",
      components: ["ArgoCD", "Git Repository", "Kubernetes Cluster", "Docker Registry", "Helm Charts"]
    }
  },
  {
    id: 5,
    title: "High Availability & Disaster Recovery Architecture",
    subtitle: "Implemented multi-region failover with RPO of 1 hour and RTO of 30 minutes",
    category: "Cloud Infrastructure",
    featured: false,
    timeline: {
      start: "Jun 2024",
      end: "Sep 2024",
      duration: "14 weeks"
    },
    challenge:
      "Single-region deployment without redundancy, no backup strategy, downtime during infrastructure failures, unplanned data loss during incidents, undefined recovery procedures, and audit compliance requirements.",
    solution: [
      "Designed multi-region active-passive architecture across AWS regions",
      "Implemented automated database replication with 1-hour RPO",
      "Set up Infrastructure-as-Code for rapid environment provisioning",
      "Configured automated failover using Route 53 health checks",
      "Implemented backup and retention policies for all data",
      "Created comprehensive disaster recovery runbooks",
      "Conducted and documented regular DR drills with full recovery validation"
    ],
    impact: [
      "Availability: Single-region → Multi-region with 99.99% uptime (4 nines)",
      "Recovery Time Objective (RTO): Undefined → 30 minutes",
      "Recovery Point Objective (RPO): Undefined → 1 hour",
      "Failover time: Manual → Fully automated (30 seconds detection + switchover)",
      "Data loss risk: Unprotected → Zero data loss (replicated snapshots)",
      "Compliance: Non-compliant → Full audit trail and encryption everywhere",
      "Disaster recovery confidence: Low → Validated through monthly drills"
    ],
    technologies: ["AWS Multi-Region", "Route 53", "Database Replication", "S3 Cross-Region", "Terraform", "Backup Automation"],
    impactMetrics: {
      availability: {
        uptime: "99.99%",
        improvement: "Multi-region redundancy"
      },
      cost: {
        before: "$2,500/month",
        after: "$4,200/month",
        reduction: "-68% (investment for availability)"
      },
      performance: {
        improvement: "30-second automated failover"
      },
      scalability: {
        capacity: "Multi-region active-passive",
        improvement: "Geographic redundancy"
      }
    },
    architecture: {
      pattern: "Multi-region HA architecture with automated failover",
      components: ["Primary Region", "Secondary Region", "Route 53", "RDS Replication", "S3 Cross-Region", "Terraform"]
    }
  }
];
