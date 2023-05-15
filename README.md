# research-useswr

useSWR について調査した

## SUMMARY

- useSWR の引数にて同一のものを渡す時、自動でキャッシュを使用する（Axios、GraphQL）
- 画面遷移時には再取得する
- SWRconfig にて初期値などを設定することができる

## MOTION

### Axios

![axios](https://github.com/ayakaki/research-useswr/assets/65984887/d31f851a-98a2-4dd9-8b06-8d124663dbb8)

###　 GraphQL
![graphql](https://github.com/ayakaki/research-useswr/assets/65984887/d73072db-c979-41d0-a241-b8b20033e531)

### SWRCONFIG にて初期値設定

![todos](https://github.com/ayakaki/research-useswr/assets/65984887/49b54584-633c-4876-a31f-f69131ede892)

### 画面遷移による再取得

![jump](https://github.com/ayakaki/research-useswr/assets/65984887/aeb722a6-79a6-4107-8d77-fb8def4f9dc5)

## URL

| 内容    | URL                                       |
| ------- | ----------------------------------------- |
| Axios   | [/axios](http://localhost:3000/axios)     |
| GraphQL | [/graphql](http://localhost:3000/graphql) |
