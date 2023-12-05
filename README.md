## HerbHub NJ

This is the repository for the herbhub client. This website aggregates all New Jersey marijuana dispensary products daily into a single location.

Visit the production website here: [https://herbhub-client.vercel.app/](https://herbhub-client.vercel.app/)

## TODO:

-   Fix page arrows showing if no pages exist (valhalla brand)
-   Data parsing for new API changes
    -   Duplicate price object (Rise bloomfield Dogwalkers)
        -   Should be 1 price object for each weight option, not based on promo vs normal price
    -   Find invalid categories
-   Unit tests?
-   End to end test with playwright
-   Fix high to low sort
-   Fix low to high sort
-   Add CDN for images
-   Add pagination for data fetching to improve initial load
-   Generate filter options via ISR API call
-   Add ISR for PDP's
