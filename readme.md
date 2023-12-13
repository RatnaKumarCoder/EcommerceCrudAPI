# Ecommerce Platform Admin API

This API provides functionalities for an ecommerce platform admin to manage product inventory using Node.js and MongoDB.

## Endpoints

### Add Product
- **URL**: `POST /products/create`
  - **Request Body**:
    ```json
    {
        "product": {
            "name": "laptop",
            "quantity": 10
        }
    }
    ```
  - **Response**:
    ```json
    {
        "data": {
            "product": {
                "name": "laptop",
                "quantity": 10
            }
        }
    }
    ```

### List Products
- **URL**: `GET /products`
  - **Response**:
    ```json
    {
        "data": {
            "products": [
                {
                    "id": 1,
                    "name": "laptop",
                    "quantity": 10
                },
                {
                    "id": 2,
                    "name": "camera",
                    "quantity": 5
                },
                {
                    "id": 3,
                    "name": "smartwatch",
                    "quantity": 8
                }
            ]
        }
    }
    ```

### Delete Product
- **URL**: `DELETE /products/:id`
  - **Response**:
    ```json
    {
        "data": {
            "message": "Product deleted"
        }
    }
    ```

### Update Product Quantity
- **URL**: `POST /products/:id/update_quantity/?number=10`
  - **Response**:
    ```json
    {
        "data": {
            "product": {
                "id": 1,
                "name": "laptop",
                "quantity": 20
            },
            "message": "Updated successfully"
        }
    }
    ```

## Testing API
- Use tools like Postman to test the API endpoints.
- Send appropriate requests (POST, GET, DELETE) to the specified URLs with the required data to interact with the API.