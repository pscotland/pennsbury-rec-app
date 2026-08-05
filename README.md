# Recreation Council Management Platform

A modern full-stack web application for managing a local recreational council's public website and administrative operations.

The platform provides a public-facing website for community members to explore programs and announcements, along with a secure administrative portal for managing programs, registrations, seasons, users, and other council operations.

> **Project Status:** 🚧 In Development (Phase 0 – Project Foundation)

---

# Project Goals

* Modernize recreation council operations
* Replace manual spreadsheets and paper-based processes
* Provide a professional public website
* Deliver a secure administrative portal
* Create a scalable foundation for future enhancements

---

# Technology Stack

## Frontend

* Angular 21
* TypeScript
* PrimeNG
* Tailwind CSS
* Angular Signals

## Backend

* ASP.NET Core Web API
* C#
* Entity Framework Core

## Database

* PostgreSQL (Supabase)

## Authentication

* ASP.NET Identity
* JWT Authentication

## Hosting

* Vercel (Angular Applications)
* Azure App Service (.NET API)

## Infrastructure

* GitHub
* GitHub Actions
* Cloudflare
* Supabase Storage

---

# Repository Structure

```text
recreation-council/
│
├── frontend/
│   ├── public-site/
│   └── admin-portal/
│
├── backend/
│   └── Recreation.Api/
│
├── docs/
│   ├── roadmap/
│   ├── architecture/
│   ├── adr/
│   ├── setup/
│   └── product/
│
├── database/
│
├── .github/
│   └── workflows/
│
└── README.md
```

---

# Documentation

Project documentation is located in the `docs` directory.

Recommended documentation structure:

```text
docs/
├── roadmap/
├── architecture/
├── adr/
├── product/
└── setup/
```

Important documents include:

* Development Roadmap
* Architecture Overview
* Architecture Decision Records (ADRs)
* Local Development Guide
* API Documentation
* Database Design

---

# Development Roadmap

The project will be delivered incrementally.

| Phase   | Description                             |
| ------- | --------------------------------------- |
| Phase 0 | Development Environment & Project Setup |
| Phase 1 | Foundation & Initial Deployment         |
| Phase 2 | Public Website                          |
| Phase 3 | Authentication & User Management        |
| Phase 4 | Admin Portal                            |
| Phase 5 | Registration System                     |
| Phase 6 | Integrations                            |
| Phase 7 | Testing & Quality                       |
| Phase 8 | MVP Release                             |

See the Development Roadmap document for detailed milestones and deliverables.

---

# Getting Started

## Prerequisites

Install:

* Git
* Node.js (LTS)
* Angular CLI
* .NET SDK
* Docker Desktop (optional)
* Visual Studio Code

---

## Clone the Repository

```bash
git clone <repository-url>
cd recreation-council
```

---

## Frontend

The repository contains two Angular applications.

### Public Website

```bash
cd frontend/public-site
npm install
ng serve
```

### Admin Portal

```bash
cd frontend/admin-portal
npm install
ng serve
```

---

## Backend

```bash
cd backend/Recreation.Api

dotnet restore

dotnet run
```

---

# Branch Strategy

Recommended workflow:

```text
main
 │
 ├── develop
 │
 ├── feature/program-management
 ├── feature/authentication
 ├── feature/public-homepage
 └── bugfix/login
```

---

# CI/CD

GitHub Actions will automate:

* Build
* Unit Tests
* Linting
* Deployment

Deployments:

* Angular → Vercel
* ASP.NET Core API → Azure App Service

---

# Coding Standards

General principles:

* Follow Angular Style Guide
* Follow Microsoft's C# Coding Conventions
* Keep components and services focused on a single responsibility
* Prefer strongly typed models
* Write clean, readable code
* Avoid premature optimization

---

# Architecture

High-level architecture:

```text
                    Cloudflare
                         │
          ┌──────────────┴──────────────┐
          │                             │
          ▼                             ▼
  Angular Public Site          Angular Admin Portal
          │                             │
          └──────────────┬──────────────┘
                         ▼
                ASP.NET Core Web API
                         │
              ┌──────────┴──────────┐
              ▼                     ▼
       PostgreSQL (Supabase)   Supabase Storage
```

---

# Future Features

Planned enhancements include:

* Online registration
* Payment processing
* Email notifications
* Team management
* Scheduling
* Reporting
* Volunteer management
* Parent portal
* Progressive Web App (PWA)

---

# Contributing

This project currently follows a solo development workflow.

Future contributors should:

1. Create a feature branch.
2. Follow the established coding standards.
3. Keep documentation up to date.
4. Update or add Architecture Decision Records (ADRs) when making significant architectural changes.
5. Submit changes through a Pull Request.

---

# License

This project is currently not licensed for public use.

A license will be selected before any public release or open-source distribution.

---

# Contact

Project Owner: Patrick Scotland

For questions, feature requests, or future collaboration, please use GitHub Issues within this repository.
