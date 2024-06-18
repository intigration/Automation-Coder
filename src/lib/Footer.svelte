<script lang="ts">
  import Icon from '$/lib/Icon.svelte';

  const footerInfo = {
    author: 'mfarhan',
    authorSite: 'https://github.com/intigration',
    license: 'About',
    link:'engr-farhan.netlify.app',
    copyright: true,
    source: 'https://github.com/intigration',
  };
</script>

<footer>
  <p>
    © <a href={footerInfo.authorSite} target="_blank" rel="noreferrer"
      >{footerInfo.author}</a
    >
    {new Date().getFullYear()} - 
    <a href=https://{footerInfo.link} target="_blank" 
      >{footerInfo.link}</a
    >
    - View on
    <a href={footerInfo.source} target="_blank" rel="noreferrer">
      GitHub <Icon name="github" color="var(--accent)" /></a
    >
  </p>
</footer>

<style lang="scss">
  footer {
    bottom: 0;
    padding: 0.5rem 1rem;
    width: calc(100% - 2rem);
    background: var(--inner-background);
    color: var(--foreground);
    p {
      margin: 0;
      text-align: center;
      a {
        color: var(--accent);
        border-radius: 4px;
        padding: 0.1rem 0.25rem;
        text-decoration: none;
        display: inline-flex;
        flex-direction: revert;
        gap: 0.25rem;
        align-items: center;
        &:hover {
          background: var(--accent);
          color: var(--background);
          :global(svg) {
            fill: var(--background);
          }
        }
      }
    }
  }
</style>
