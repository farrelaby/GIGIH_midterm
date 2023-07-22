# Tokopedia Play Clone App *Backend only

## Database Collections Schemas
### videos
- the schema more or less looks like this

```js
{
    'id':uuid,
    'url': String,
    'thumbnail_url': String,
    'products':[{
        'id': uuid,
        'url': String,
        'image_url': String
        'title': String,
        'price': Number, 
    }]
}

```

### comments
```js
{
    'id' : uuid,
    'comment' : String,
    'username' : String,
    'timestamp' : Timestamp,
    'video_id' : videos.id
}
```

## API Structures
### videos
- `GET /videos` : get all videos
    - request body : `{}`
    - response body : 
    ```js
    [
        {
            'id':uuid,
            'thumbnail_url': String,
        }
    ]
    ```
- `GET /videos/:id` : get a video by id
    - request body : `{}`
    - response body : 
    ```js
    {
        'id':uuid,
        'url': String,
        'products':[{
            'id': uuid,
            'url': String,
            'image_url': String
            'title': String,
            'price': Number, 
        }]
    }
    ```

## How To Run The Server
1. clone the repository
2. run `npm install`
3. configure the `.env` file, especially for the database URL using `DB_URL` variable
4. run `npm run dev`
5. access the available endpoints through `localhost:8000/v1` with your preferred API client (Postman, Insomnia, etc)
