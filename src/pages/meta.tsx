import { Helmet } from 'react-helmet-async'

export function HomeMeta() {
  return (
    <Helmet>
      <title>Zayna – Home</title>
      <meta name="description" content="Welcome to Zayna" />
    </Helmet>
  )
}

export function ZaynaMeta() {
  return (
    <Helmet>
      <title>About Zayna</title>
      <meta name="description" content="Learn about Zayna" />
    </Helmet>
  )
}

export function PlatformMeta() {
  return (
    <Helmet>
      <title>Platform</title>
      <meta name="description" content="Platform features" />
    </Helmet>
  )
}

export function BookMeta() {
  return (
    <Helmet>
      <title>Book Now</title>
      <meta name="description" content="Book a demo" />
    </Helmet>
  )
}

export function WhyMeta() {
  return (
    <Helmet>
      <title>Why Us</title>
      <meta name="description" content="Benefits of Zayna" />
    </Helmet>
  )
}

