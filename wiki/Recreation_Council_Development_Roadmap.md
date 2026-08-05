# Recreation Council Management Platform

> Development Roadmap & Technical Implementation Plan

> **Version:** 1.0

## Purpose

This document serves as the primary roadmap for the Recreation Council
Management Platform. It is intended for developers, product owners, and
stakeholders and will live in the monorepo wiki/docs.

------------------------------------------------------------------------

# 1. Project Overview

## Project Name

**Recreation Council Management Platform**

## Product Vision

Create a modern web platform that enables a local recreational council
to manage programs, registrations, announcements, and administration
through a public website and secure administrative portal.

## Problem Being Solved

-   Manual spreadsheets
-   Disconnected communication
-   Difficult registration tracking
-   Limited reporting
-   Outdated public information

## Target Users

-   Community Members
-   Parents/Guardians
-   Council Administrators
-   Program Coordinators

## Business Goals

-   Centralize recreation management
-   Reduce administrative effort
-   Improve communication
-   Deliver an extensible platform

------------------------------------------------------------------------

# 2. Scope Definition

## MVP

-   Public marketing website
-   Secure admin portal
-   Authentication
-   Program management
-   Announcements
-   Registration management
-   Automated deployments

## Deferred

-   Mobile apps
-   Advanced reporting
-   Team scheduling
-   Parent portal
-   Volunteer management

------------------------------------------------------------------------

# 3. User Requirements

## Personas

-   Community Member
-   Council Administrator
-   Program Coordinator

## Sample User Stories

-   View available programs
-   Register for activities
-   Manage programs
-   Publish announcements

Acceptance criteria should be defined for each backlog item.

------------------------------------------------------------------------

# 4. Technical Architecture

``` text
                 Cloudflare
                      |
        -----------------------------
        |                           |
 Public Angular Site        Admin Angular SPA
        |                           |
        -------- ASP.NET Core API ----
                    |
          PostgreSQL (Supabase)
                    |
           Supabase Storage
```

------------------------------------------------------------------------

# 5. Technology Stack

  -----------------------------------------------------------------------
  Area                    Technology
  ----------------------- -----------------------------------------------
  Frontend                Angular 21, TypeScript, PrimeNG, Tailwind CSS,
                          Angular Signals

  Backend                 ASP.NET Core Web API, C#, Entity Framework Core

  Database                PostgreSQL (Supabase)

  Authentication          ASP.NET Identity + JWT

  Hosting                 Vercel, Azure App Service

  Storage                 Supabase Storage

  Source Control          GitHub

  CI/CD                   GitHub Actions

  DNS                     Cloudflare
  -----------------------------------------------------------------------

### Why these technologies?

-   Angular provides a scalable enterprise frontend.
-   ASP.NET Core offers a robust API platform.
-   PostgreSQL is reliable and widely supported.
-   GitHub Actions integrates naturally with the repository.
-   Vercel and Azure simplify deployments.

------------------------------------------------------------------------

# 6. Phase 0 -- Development Environment

## Install Order

1.  Git
2.  GitHub account and repository
3.  Node.js (LTS)
4.  Angular CLI
5.  .NET SDK
6.  Visual Studio Community (recommended)
7.  Docker Desktop
8.  pgAdmin / PostgreSQL tools
9.  Postman or Insomnia
10. Azure Data Studio (optional)
11. GitHub Desktop (optional)
12. Create Azure, Vercel, Supabase, Cloudflare accounts
13. Configure VS Code extensions
14. Install Azure CLI, GitHub CLI, Supabase CLI
15. Create monorepo structure

``` text
recreation-council/
├── frontend/
│   ├── public-site/
│   └── admin-portal/
├── backend/
├── docs/
├── database/
└── .github/workflows/
```

Exit Criteria: - All tooling installed - Applications scaffolded -
Initial deployment pipeline configured

------------------------------------------------------------------------

# 7. Data Architecture

Core entities: - Users - Roles - Programs - Seasons - Registrations -
Announcements

Relationships: - Role → Users - Program → Seasons - Season →
Registrations - User → Registrations

------------------------------------------------------------------------

# 8. Development Phases

  Phase   Objective
  ------- ----------------------------------
  1       Foundation
  2       Public Website
  3       Authentication & User Management
  4       Admin Portal
  5       Registration System
  6       Integrations
  7       Testing & Quality
  8       MVP Release

Each phase includes planning, implementation, testing, and stakeholder
review.

------------------------------------------------------------------------

# 9. API Strategy

-   RESTful JSON APIs
-   JWT authentication
-   Versionable endpoints
-   Entity Framework Core
-   Future integrations: Stripe, SendGrid

------------------------------------------------------------------------

# 10. Deployment

Environments: - Development - Testing - Production

Pipeline:

``` text
GitHub
   ↓
GitHub Actions
   ↓
Build + Test
   ↓
Deploy
   ├── Vercel
   └── Azure App Service
```

------------------------------------------------------------------------

# 11. Testing Strategy

-   Angular unit tests
-   xUnit backend tests
-   Playwright end-to-end tests
-   Manual smoke testing
-   CI quality gates

------------------------------------------------------------------------

# 12. Security

-   ASP.NET Identity
-   JWT
-   HTTPS
-   Role-based authorization
-   GitHub Secrets
-   Environment variables
-   OWASP best practices

------------------------------------------------------------------------

# 13. Risks

  Risk                  Mitigation
  --------------------- --------------------------
  Scope creep           Strict MVP
  Limited time          Small iterative releases
  Authentication bugs   Use ASP.NET Identity
  Third-party changes   Abstract integrations

------------------------------------------------------------------------

# 14. Future Roadmap

-   Team management
-   Parent portal
-   Volunteer management
-   Reporting
-   Scheduling
-   Mobile support
-   Background jobs
-   Shared Angular library

------------------------------------------------------------------------

# 15. Open Questions

-   Branding
-   Payment provider
-   Email provider
-   User roles
-   Registration approval workflow
-   Backup strategy
-   Privacy requirements

------------------------------------------------------------------------

# 16. Architecture Decision Records (ADRs)

This project will maintain lightweight Architecture Decision Records
under:

``` text
docs/adr/
```

Each ADR captures: - Context - Decision - Alternatives considered -
Consequences - Status (Proposed, Accepted, Superseded)

## Initial ADRs

  ADR       Decision
  --------- -------------------------------------------
  ADR-001   Use a monorepo for frontend and backend
  ADR-002   Two Angular applications (Public + Admin)
  ADR-003   ASP.NET Core Web API for backend
  ADR-004   PostgreSQL hosted by Supabase
  ADR-005   GitHub Actions for CI/CD
  ADR-006   Vercel for Angular hosting
  ADR-007   Azure App Service for API hosting
  ADR-008   ASP.NET Identity + JWT authentication
  ADR-009   REST APIs instead of GraphQL
  ADR-010   PrimeNG + Tailwind UI stack

Future architectural changes should be documented as ADRs before
implementation whenever practical.
