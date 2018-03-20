# fetch-tweets
>### Built using twitter-scraper NPM [Module](https://www.npmjs.com/package/twitter-scraper)
>Hosted on **Heroku**.
>Test [here](https://fetch-tweets.herokuapp.com/) 
----
### End Points
>**1.Tweets**
>``` 
>/tweets/userTd/startDate/endDate 
>```
>
>**2.Core-tweets**
>```
>/core-tweets/userTd/startDate/endDate 
>```

### Params Format
>* **userId** = { twitter's userId }
>* **startDate** = { YYYY-MM-DD }
>* **endDate** = { YYYY-MM-DD }

>**Note :**
>
>* *startDate and endDate shouldn't be same.*
>* *All are strings.*

### Response Format
> ```javascript
> { 
>  data : Array,
>  total : Number
> }
>```
