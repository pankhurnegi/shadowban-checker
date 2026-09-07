# Instagram API documentation

## Current product

The official Meta/Instagram platform uses Instagram Login and the Instagram Graph API via the `graph.instagram.com` host for Instagram Professional account access and insights.

## Current login method

Instagram Login is the official authentication mechanism for Instagram Professional accounts. It requires a user to authorize the application and exchange the authorization result for an Instagram user access token.

## Exact permissions

The application should use the Instagram user access token with relevant permissions for account and media insights. The core official permission associated with insights is:

- `instagram_business_manage_insights`

The application must not invent undocumented permissions or fields.

## Account eligibility

Eligibility depends on the current Meta/Instagram account setup and product access. Only Instagram Professional accounts that are eligible for the official insights APIs can produce the supported business/creator metrics. The application must treat account eligibility as a runtime requirement and handle non-eligible accounts explicitly.

## Account insight endpoints

The official Instagram Graph API provides account-level insights data through the Instagram user object, typically using the `graph.instagram.com/{ig-user-id}/insights` pattern. Practical usage depends on the live API schema and the account's configuration and permission set.

## Media insight endpoints

Official media insight data is returned for media items associated with an authorized Instagram Professional account, typically through the Graph API using the media object and the `insights` edge.

## Supported metrics

Supported metrics vary by account, media type, and API conditions. Examples explicitly referenced by the current official documentation include:

- account-level reach
- follower_count
- profile_views
- accounts_engaged
- total_interactions
- views
- follows_and_unfollows
- media reach
- media impressions
- media views
- likes
- comments
- shares
- saves

The application should only consume metrics that are returned in the live API response.

## Limitations

- Some insights are unavailable depending on the account and metric conditions.
- Unavailable insights may return an empty dataset rather than zero.
- Historical availability is limited by the API and account configuration.
- Metric availability must be checked before assuming the field exists.
- The application must not rely on scraped or unofficial Instagram endpoints.

## Retention period

Retention and historical availability depend on the current Meta API release and account data. The MVP should treat historical detail as variable and should only use metrics that are provided by the API.

## Access level requirements

- Official Meta/Instagram app access
- Instagram Login flow for a user account
- Valid Instagram user access token
- Instagram Professional account eligibility
- Relevant insight permissions

## Implementation note

This project keeps the Instagram-specific integration isolated from the analysis logic, as required by the MVP architecture.
