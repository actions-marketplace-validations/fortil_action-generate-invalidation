# action-generate-invalidation
Create an invalidation cloudfront

example:

```yml
name: Testing PR

on:
  pull_request:
    types: [opened, synchronize]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: fortil/action-generate-invalidation@v1
        with:
          INVALIDATION_ID: INVALIDATION_ID
```
