<script>
    import "carbon-components-svelte/css/g90.css";
    import {
        Header,
        HeaderNav,
        HeaderNavItem,
        HeaderNavMenu,
        SideNav,
        SideNavItems,
        SideNavMenu,
        SideNavMenuItem,
        SideNavLink,
        SideNavDivider,
        SkipToContent,
        Content,
        Grid,
        Row,
        Column,
  } from "carbon-components-svelte";
    import { page } from '$app/stores';
    import ErrorPage from '$lib/components/ErrorPage.svelte';
    import { Fade } from "carbon-icons-svelte";
  
    let isSideNavOpen = false; // State to control the side navigation
    let status = 200;

    // Listen for changes in the page store to handle routing status
    $: {
      status = $page.status;
    }
  </script>

  <Header company="News" platformName="Dashboard" bind:isSideNavOpen>
    <svelte:fragment slot="skip-to-content">
      <SkipToContent />
    </svelte:fragment>
    <SideNav bind:isOpen={isSideNavOpen} rail>
    <SideNavItems>
        <SideNavLink icon={Fade} href="/" text="News Board" />
        <SideNavLink icon={Fade} href="/other-page" text="Statistic" />
        </SideNavItems>
    </SideNav>
  </Header>

  <Content>
    <Grid>
      <Row>
        <Column>
          <!-- Check the status to display the ErrorPage component -->
          {#if status !== 200}
            <ErrorPage {status} />
          {:else}
            <slot />
          {/if}
        </Column>
      </Row>
    </Grid>
  </Content>
  