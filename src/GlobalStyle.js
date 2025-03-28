import { Global } from "@emotion/core";
import { css } from "@emotion/core";
const GlobalStyle = (props) => (
  <Global
    {...props}
    styles={css`
      html,
      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      a,
      p,
      span,
      em,
      small,
      strong,
      sub,
      sup,
      mark,
      del,
      ins,
      strike,
      abbr,
      dfn,
      blockquote,
      q,
      cite,
      code,
      pre,
      ol,
      ul,
      li,
      dl,
      dt,
      dd,
      div,
      section,
      article,
      main,
      aside,
      nav,
      header,
      hgroup,
      footer,
      img,
      figure,
      figcaption,
      address,
      time,
      audio,
      video,
      canvas,
      iframe,
      details,
      summary,
      fieldset,
      form,
      label,
      legend,
      table,
      caption,
      tbody,
      tfoot,
      thead,
      tr,
      th,
      td {
        margin: 0;
        padding: 0;
        border: 0;
      }

      /* Typography
 * *********************************** */

      @import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");

      html {
        font-size: 62.5%;
        scroll-behavior: smooth;
      }

      body {
        font-family: "Open Sans", sans-serif;
        font-size: 1.6rem;
        line-height: 1.2;
      }

      * {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
      }

      a,
      a:visited {
        color: inherit;
      }

      /* Layout
 * *********************************** */

      article,
      aside,
      footer,
      header,
      nav,
      section,
      main {
        display: block;
      }

      * {
        box-sizing: border-box;
      }

      *:before,
      *:after {
        box-sizing: inherit;
      }

      /* Elements
 * *********************************** */

      table {
        border-collapse: collapse;
        border-spacing: 0;
      }

      ol,
      ul {
        list-style: none;
      }

      img,
      video {
        max-width: 100%;
      }

      img {
        border-style: none;
      }

      blockquote,
      q {
        quotes: none;
      }

      blockquote:after,
      blockquote:before,
      q:after,
      q:before {
        content: "";
        content: none;
      }

      /* Attributes & states
 * *********************************** */

      [hidden] {
        display: none !important;
      }

      [disabled] {
        cursor: not-allowed;
      }

      :focus:not(:focus-visible) {
        outline: none;
      }

      input {
        font-size: 16px;
      }

      input[type="color"] {
        -webkit-appearance: none;
        border: none;
        width: 32px;
        height: 32px;
      }
      input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
      }
      input[type="color"]::-webkit-color-swatch {
        border: none;
      }

      input {
        font-size: 16px;
      }

      /* Utility classes
 * *********************************** */

      .sr-only {
        position: absolute;
        clip: rect(1px, 1px, 1px, 1px);
        left: -9999px;
        top: -9999px;
      }
    `}
  />
);

export default GlobalStyle;
