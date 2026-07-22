#!/bin/bash

# Script to add a new blog post to the content pipeline
# Usage: ./scripts/add-blog-post.sh "Post Title" "devops" "intermediate"

set -e

if [ $# -lt 1 ]; then
    echo "Usage: $0 \"Post Title\" [category] [difficulty] [featured]"
    echo ""
    echo "Examples:"
    echo "  $0 \"My DevOps Post\" devops intermediate"
    echo "  $0 \"Cloud Tips\" \"Cloud Infrastructure\" beginner true"
    echo ""
    echo "Categories: DevOps, Cloud Infrastructure, Full-Stack"
    echo "Difficulty: Beginner, Intermediate, Advanced"
    echo "Featured: true or false (default: false)"
    exit 1
fi

TITLE="$1"
CATEGORY="${2:-DevOps}"
DIFFICULTY="${3:-Intermediate}"
FEATURED="${4:-false}"

# Convert title to slug (lowercase, replace spaces and special chars with hyphens)
SLUG=$(echo "$TITLE" | tr '[:upper:]' '[:lower:]' | sed 's/[^a-z0-9-]/-/g' | sed 's/-+/-/g' | sed 's/^-\|-$//')

# Get next ID (count existing files + 1)
NEXT_ID=$(($(ls -1 content/blog/ 2>/dev/null | wc -l) + 1))

# Pad ID with leading zero
ID_PADDED=$(printf "%02d" $NEXT_ID)

# Format date as today
DATE=$(date +%Y-%m-%d)

# Create filename
FILENAME="content/blog/${ID_PADDED}-${SLUG}.json"

# Check if file already exists
if [ -f "$FILENAME" ]; then
    echo "Error: $FILENAME already exists"
    exit 1
fi

# Create the JSON content
cat > "$FILENAME" << EOF
{
  "id": $NEXT_ID,
  "slug": "$SLUG",
  "title": "$TITLE",
  "category": "$CATEGORY",
  "difficulty": "$DIFFICULTY",
  "readTime": "5 min read",
  "date": "$DATE",
  "featured": $FEATURED,
  "views": "0",
  "likes": "0",
  "comments": "0",
  "excerpt": "Add a brief description of your post here...",
  "tags": ["tag1", "tag2", "tag3"],
  "heroImage": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=630&fit=crop",
  "content": "# $TITLE\n\nWrite your content here in Markdown format.\n\n## Getting Started\n\nAdd your sections and content.\n\n## Best Practices\n\nShare your insights.\n\n## Conclusion\n\nSummarize the key points."
}
EOF

echo "✓ Created: $FILENAME"
echo ""
echo "Next steps:"
echo "  1. Edit the file to add your content"
echo "  2. Update the excerpt, tags, and read time"
echo "  3. Git commit and push"
echo "  4. The post will appear automatically in the blog"
