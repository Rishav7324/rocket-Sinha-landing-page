<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
            background-color: #0A0A0A;
            color: #EAEAEA;
            margin: 0;
            padding: 2rem;
          }
          h1 {
            color: #FFD700;
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }
          p {
            color: #A1A1A1;
            margin-top: 0;
            margin-bottom: 2rem;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background-color: #1A1A1A;
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
            border-radius: 8px;
            overflow: hidden;
          }
          th, td {
            padding: 1rem 1.5rem;
            text-align: left;
          }
          th {
            background-color: #2A2A2A;
            font-weight: 600;
            color: #FFD700;
          }
          tr {
            border-bottom: 1px solid #2A2A2A;
          }
          tr:last-child {
            border-bottom: none;
          }
          a {
            color: #87CEEB;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
          td.priority {
            font-family: monospace;
          }
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p>This XML sitemap is used by search engines to crawl the website.</p>
        <table>
          <thead>
            <tr>
              <th>URL</th>
              <th>Last Modified</th>
              <th>Priority</th>
            </tr>
          </thead>
          <tbody>
            <xsl:for-each select="s:urlset/s:url">
              <tr>
                <td>
                  <xsl:variable name="loc">
                    <xsl:value-of select="s:loc"/>
                  </xsl:variable>
                  <a href="{$loc}">
                    <xsl:value-of select="s:loc"/>
                  </a>
                </td>
                <td>
                  <xsl:value-of select="s:lastmod"/>
                </td>
                <td class="priority">
                  <xsl:value-of select="s:priority"/>
                </td>
              </tr>
            </xsl:for-each>
          </tbody>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>