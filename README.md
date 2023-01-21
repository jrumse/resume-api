# resume-api
An API Service for resume-website

# Usage
1. Configure MongoDB Connection by setting MONGO_ID and MONGO_PASS env variables
2. Run 'npm start'

# Routes

## Get All Contact Receipts
Endpoint: /contact
Method: GET
Query Parameters: None

## Post Contact Receipt
Endpoint: /contact
Method: POST
Query Parameters: None
Body: Takes in Contact Schema as Input

## Get All Content
Endpoint: /content
Method: GET
Query Parameters: None

## Get All Posts
Endpoint: /post
Method: GET
Query Parameters: content - If true, aggregates content field

## Get Posts By Category
Endpoint: /post/<category>
Method: GET
Query Parameters: content - If true, aggregates content field
Endpoint Parameters: category - currently supports 'about', 'education', and 'work'