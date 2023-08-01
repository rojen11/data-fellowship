# Data Fellowship landing page

## Installing Dependencies

```bash
yarn
```
hello
## Development

### Prerequisits

- Create `_contents` folder
- Copy contents from `demo_data` folder to `_contents`

### Start Script

```bash
yarn dev
```

## Environment

Env File

- .env.development.local

```bash
NEXT_PUBLIC_FORM_URL=
```

## Production
- Push to main branch triggers build
- Data from `https://github.com/CodeforNepal/fellowship-data` -> `data_literacy/_contents` will be used to generate the site.

```bash
yarn build
```
