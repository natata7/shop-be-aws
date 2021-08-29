shop-be-aws

GET - https://iqs0n6evpg.execute-api.eu-west-1.amazonaws.com/dev/products
GET - https://iqs0n6evpg.execute-api.eu-west-1.amazonaws.com/dev/products/{productID}

# Frontend
https://dww5q0q33lnph.cloudfront.net/
# Swagger documentation
https://app.swaggerhub.com/apis-docs/natmarch/aws-be/1.0.0

# Additional
- [x] Async/await is used in lambda functions
- [x] ES6 modules are used for product-service implementation
- [x] Webpack is configured for product-service
- [x] SWAGGER documentation is created for product-service
- [ ] Lambda handlers are covered by basic UNIT tests
- [x] Lambda handlers (getProductsList, getProductsById) code is written not in 1 single module (file) and separated in codebase 
- [ ] Main error scenarious are handled by API ("Product not found" error)