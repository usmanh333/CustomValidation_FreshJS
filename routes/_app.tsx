import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://cdn.jsdelivr.net/npm/daisyui@3.9.2/dist/full.css" rel="stylesheet" type="text/css" />
        <title>formValidation</title>
      </head>
      <body>
        <Component />

        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </html>
  );
}
