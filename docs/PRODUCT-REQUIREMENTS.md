# Escolent — Engineering Requirements Document

**Subtitle:** The single requirements document for the learner MVP — user stories with acceptance criteria, engineering modules, locked decisions, and the design-system journey  
**Status:** v1.3 — open product choices closed, ready for founder lock. This file is the requirements of record.  
**Last updated:** 9 October 2026 (Africa/Cape Town)  
**Owner:** Tychique Lesambo · **Ship authority:** Tychique Lesambo
**Primary audience:** fullstack engineer, artificial-intelligence coding tools, product designer, founders  
**Path:** `docs/PRODUCT-REQUIREMENTS.md` (this is the only requirements-of-record)  
**Design-system source of truth:** `escolent-student-demo` route `/design-system` (ten parts). Screens in this document mean those specimens, not a second visual language.  
**How to read on a laptop:** open this file in Cursor, VS Code, or any Markdown preview. Section links work there. In chat preview, scroll to “## 3. All user stories”.  
**Supersedes:** `escolent-student-demo/cursor-handoff/docs/requirements.md` and the other files in that handoff folder. Those describe an earlier school-pilot product (teacher spaces, a Grade 8 mathematics course Escolent would hold, LTI, teacher override). They are not the product locked for this MVP.

## Changelog

| Version | Date | Author | Notes |
|---|---|---|---|
| **v1.3** | **9 October 2026** | Tychique Lesambo / engineering | Closes the three product choices that were still open. Email sign-in is a six-digit code on the door, not a magic link. Bayesian Knowledge Tracing uses prior 0.10, transit 0.10, slip 0.10, and guess 0.20, with the label bands in Requirement 22. The helpline number is deployment configuration, and the specimen number does not ship. |
| **v1.2** | **9 October 2026** | Tychique Lesambo / engineering | Closes the four residuals on the same 41 stories. A parent attaches each child by that child’s sign-in email. The payer enters the phone number, then the code. Each door binds only the trial keys it can produce. Requirement 1 no longer caps a household at two children. |
| **v1.1** | **8 October 2026** | Tychique Lesambo / engineering | Gap fill on the same 41 stories. No new requirement numbers. Closes the 35 holes found against the design system: Polar reports payment, a used number leaves practice open, Confirm gates the shell, a school-age trial waits for the parent phone, Bayesian Knowledge Tracing is the mastery code, and the catalog’s pay and sign-out buttons are not product controls. |
| **v1.0** | **8 October 2026** | Tychique / engineering | First requirements-of-record for the locked learner MVP. Grounded in the living design system (shell, Today, Practice, Learn, Progress, front door, trial, failure, foundations, graph). Does not carry the retired handoff: Escolent does not offer courses, does not ship teacher / admin / pedagogical-lead shells, and does not sell a check on the graph in year one. |

**Label rule:** **Module E1–E11** are engineering modules in this document. **Requirement 1–41** are the user stories in §3. Never say “E3” for a story number, and never say “Requirement E3” for a module. Inventory edges are **IE1–IE12**.

**What this document does:**

- States the learner MVP in one scrollable requirements document.
- Keeps a contiguous story list in §3, and puts engineering **WHEN / THEN** rows in the module that builds them.
- Acceptance criteria live in §3. Modules name the stories they own and add the engineering contract. They do not paste a second copy of every criterion, so the two cannot drift.
- Does not authorise staff shells, open-writing judgment, or a paid check on the graph.
- Does not replace the structural design or the implementation-task document. The structural design of record is `docs/STRUCTURAL-DESIGN.md`. The implementation tasks of record are `docs/IMPLEMENTATION-TASKS.md`.

**What this document does not do:**

- It does not invent a course catalog, a school administration product, or a verification marketplace.
- It does not treat design-system specimens (Introduction to Python, two-step equations, related rates) as courses Escolent sells. They show the rules. The product stays subject-agnostic.

---

## How to read this document

1. **§3 All user stories** — Requirements **1–41**, each with a user story and numbered acceptance criteria in the form **WHEN / THE Platform SHALL**. Use this for product coverage.
2. **§4–§14 Modules E1–E11** — the build spine. Each module has purpose, in and out, status, the requirement numbers it owns, and engineering rows **E*-01** onward.

Every engineering row uses:

> **WHEN** [trigger] **THEN** [observable, testable outcome]

Build statuses:

- **CURRENT BUILD TARGET** — in this learner MVP.
- **SCHEMA-READY ONLY** — the data may exist so a later product can attach; no year-one surface sells or operates it.
- **PARKED** — named, not built, until a school is a customer or a later decision says otherwise.

**Non-negotiable product rule this spine is built around:** Escolent is the window where a learner studies the course they already have. Escolent does not offer the course, does not hold the school password, does not sign the learner in on a cloud computer, and does not click, submit, or press Next. Code moves a mastery label. A model never paints one.

**Locked founder decisions** are in §19. The ones that govern every module:

- One learner shell, two faces. A child never sees the price.
- Seven days, no card. Every trial binds to the confirmed phone. The open page also binds a course-account user id and the extension. A connection also binds a course-account user id. A file binds the phone only.
- Polar is the first biller. Stripe is out. **$16** a month or **$144** a year.
- The graph is built now. A later check on a row is not offered this year.
- Open writing is not judged. Staff shells wait for a school customer.

**MoSCoW:** **(M)** Must, **(S)** Should, **(C)** Could. Counts: **39 Must · 2 Should · 0 Could**.

---

## Table of contents

1. [Scope overview and feature map](#1-scope-overview-and-feature-map)
2. [Personas](#2-personas)
3. [All user stories with acceptance criteria (Requirements 1–41)](#3-all-user-stories-with-acceptance-criteria-requirements-1-41)
4. [E1 — Front door](#4-e1--front-door) · CURRENT BUILD TARGET
5. [E2 — Inhabit](#5-e2--inhabit) · CURRENT BUILD TARGET
6. [E3 — Skill name](#6-e3--skill-name) · CURRENT BUILD TARGET
7. [E4 — Shell and faces](#7-e4--shell-and-faces) · CURRENT BUILD TARGET
8. [E5 — Today](#8-e5--today) · CURRENT BUILD TARGET
9. [E6 — Learn and the ask](#9-e6--learn-and-the-ask) · CURRENT BUILD TARGET
10. [E7 — Practice](#10-e7--practice) · CURRENT BUILD TARGET
11. [E8 — Progress and the parent map](#11-e8--progress-and-the-parent-map) · CURRENT BUILD TARGET
12. [E9 — The graph](#12-e9--the-graph) · CURRENT BUILD TARGET
13. [E10 — Trial and billing](#13-e10--trial-and-billing) · CURRENT BUILD TARGET
14. [E11 — Failure, helpline, and sign-out](#14-e11--failure-helpline-and-sign-out) · CURRENT BUILD TARGET
15. [Non-functional requirements](#15-non-functional-requirements)
16. [Data model summary](#16-data-model-summary)
17. [Definition of Done and open items](#17-definition-of-done-and-open-items)
18. [Glossary, journey, happy paths, and inventory edges](#18-glossary-journey-happy-paths-and-inventory-edges)
19. [Locked decisions](#19-locked-decisions)
20. [Design-system journey map](#20-design-system-journey-map)

---

## 1. Scope overview and feature map

### 1.1 What Escolent is

Escolent is the window where a learner studies **the course they already have**. It reads a page the learner already opened, a read connection they can authorize alone, or a file they drop. It drafts a skill name from that source. The learner confirms the name. Practice, a short lesson, and a portable graph of mastery labels then hang off that confirmed name.

**One product verb:** study the course you already have.  
**Brand:** Escolent.  
**Category:** a mastery window on top of study the learner already does. **Not** a course catalog. **Not** a learning management system. **Not** a school administration suite in this MVP.

The crowded formal day is the design center: a school-age learner with several classes, then a university student with several courses. An adult uses the same calm window without a calendar. A parent sees labels, not the work.

### 1.2 What is explicitly out of scope (this MVP)

| Out of scope | Reason |
|---|---|
| Offering courses, lessons, or a subject catalog | Escolent does not own the course. Specimens in the design system are examples of rules, not a catalog |
| Teacher briefing, admin, pedagogical lead, help-control shells | Archived until a school is a customer |
| Grade write-back into the learning management system | Waits with the staff shells |
| A connection that needs a school administrator to approve a key | Year one only connects what the learner can authorize alone |
| Judging open writing (essays, project notes, lab prose) | A later version. Those pages stay reference and “Not enough to judge” |
| Selling or operating a third-party check on a graph row | The row can hold the check later. It is not offered, priced, or sold this year |
| Holding the school or course password | Permission is to read, at that moment |
| Signing the learner in on a cloud computer Escolent operates | The read happens in the learner’s own browser, or by a connection they authorize, or by a file |
| Clicking, submitting, or pressing Next on the course page | Inhabitation is read-only |
| A parent reading the child’s page, problem, or answer | The parent map is labels only |
| Showing a child the price, “payment failed,” or “number already used” | The person who pays sees those |
| Stripe | Out for year one |
| Using a shared network address as a reason to refuse a trial | Locked. The accepted hole is a new phone, a new computer, and a new account on a site anyone can register |
| A hint button on Practice | Check is the only practice action. See ADR-008 for the dormant scoring rule |
| Distress detection, teacher override of a label, a misconception catalog Escolent curates, LTI grade passback | Retired with the old handoff. Not carried silently into this MVP |

### 1.3 Capability / build map

| Module | Status | Never cut? |
|---|---|---|
| E1 Front door | CURRENT BUILD TARGET | Yes — identity and the grant |
| E2 Inhabit | CURRENT BUILD TARGET | Yes — the read, and the refusal to act |
| E3 Skill name | CURRENT BUILD TARGET | Yes — one confirmed name, one row |
| E4 Shell and faces | CURRENT BUILD TARGET | Yes — who sees which place, and who sees the price |
| E5 Today | CURRENT BUILD TARGET | Yes — the crowded day, and the adult day without a calendar |
| E6 Learn and the ask | CURRENT BUILD TARGET | Yes — lesson, different worked example, refusal |
| E7 Practice | CURRENT BUILD TARGET | Yes — they solve it; a miss stays on the same problem |
| E8 Progress and the parent map | CURRENT BUILD TARGET | Yes — labels, and the parent boundary |
| E9 The graph | CURRENT BUILD TARGET | Yes — built now. The paid check is schema-ready only |
| E10 Trial and billing | CURRENT BUILD TARGET | Yes — seven days, then the person who pays |
| E11 Failure, helpline, sign-out | CURRENT BUILD TARGET | Yes — honest failure, a phone number, a way out |

### 1.4 Cut order

If scope must shrink, cut from the bottom of this list. Do not cut upward.

1. **Inhabit rules and the refusal to act** — never cut.
2. **Confirmed skill name, graph row, and code-owned labels** — never cut.
3. **Practice on a checkable problem, including the easier same-problem step and abstain** — never cut.
4. **Shell, faces, and price blindness for the child** — never cut.
5. **Today for the formal day, then the adult day** — never cut the formal day first.
6. **Trial binding and “map stays, practice waits”** — never cut.
7. **Pay handoff** — cut only if the seven-day trial still ends honestly and practice waits.
8. Anything in §1.2 — never “temporarily” add it.

### 1.5 Who pays

| Who | Pays? | Sees the price? |
|---|---|---|
| School-age learner | No. A parent pays | Never |
| University student | Yes | Only on Account |
| Adult learner | Yes | Only on Account |
| Parent | Yes, for the children on that phone | Only on Account |

**Price:** **$16** a month, or **$144** a year. Both are offered. A change of plan starts at the next renewal.

### 1.6 Trial

Seven days. No card. The trial starts only after **both** of these are true: the phone is confirmed, and a real course page has been read (open page, authorized connection, or readable file). An unreadable page does not start the trial.

Every trial binds to the confirmed phone. A new email does not restart it. The other keys depend on the door. The page already open also binds the course-account user id from that read and the extension install. An authorized connection also binds the course-account user id from that connection, and does not bind an extension. A readable file binds the phone only: a file has no course-account user id, and the learner is not asked to type one. A shared network is not a reason to refuse.

A parent’s phone covers every school-age account attached to it by that child’s sign-in email. One trial, then one subscription. The specimen shows two children. The household is not capped at two.

For a school-age learner the phone is the parent’s. A read alone may confirm a skill name and show the map. Practice stays waiting, with no price and no billing words, until that child’s email is attached to the parent’s confirmed phone. No trial row exists until both gates are true, and until the door has produced the keys it is required to produce.

When the trial ends unpaid, or a payment fails, the map stays and practice waits. A phone that already started a trial does not close practice. The child’s face does not say why in the language of billing. Polar reports whether a payment succeeded. Escolent has no control that marks an account paid.

---

## 2. Personas

No named school, and no named child, is a product persona. The four faces below are the MVP.

### 2.1 School-age learner

**Who they are.** A child in formal school, with several classes on one day. Deadlines exist on the school site. Escolent does not grade those deadlines.

**Job to be done:** “I already have the page open. Help me practice the skill on that page, and show me where I stand, without a new course and without a bill.”

**Places:** Today, Learn, Practice, Progress. No Account.

**Disqualifiers for this face:** price, payment failure, “this number was already used,” a phone-number field, a phone-code field, a school password, the parent’s billing screen.

### 2.2 University student

**Who they are.** A student with several courses in one week. They pay for themselves.

**Job to be done:** “Keep the week’s courses in view, practice the page I already have open, and do not grade the lab report or the source summary.”

**Places:** Today, Learn, Practice, Progress, Account. Calm face.

### 2.3 Adult learner

**Who they are.** An adult studying a course they already have. There is no term calendar in Escolent. The design-system specimen is Introduction to Python; that specimen is not a course Escolent sells.

**Job to be done:** “Continue from the last miss, then the skill that has gone stale. Do not invent a due date.”

**Places:** same as the university student. No Week control.

### 2.4 Parent

**Who they are.** The adult who pays for the school-age children on their phone. They confirm that phone, then attach each child by the email that child uses to sign in. The specimen shows two children. The household is not capped at two.

**Job to be done:** “See which skill is in progress and which label it holds. Do not show me the problem or the answer.”

**Places:** Progress and Account only. The shell opens on Progress. The parent does not read the child’s page.

### 2.5 Not a persona in this MVP

Teacher, school admin, pedagogical lead, and help-control operator. They return only when a school is a customer, under a new decision. Do not build their shells in this MVP.

---

## 3. All user stories with acceptance criteria (Requirements 1–41)

**MoSCoW counts:** 39 Must · 2 Should · 0 Could.

### Requirement 1: Choose who you are (Must)

**User Story:** As a person opening Escolent, I want to say whether I am school-age, a university student, an adult, or a parent, so that the door and the shell match me.

#### Acceptance Criteria

1. WHEN the front door opens, THE Platform SHALL ask who the person is before sign-in: school-age, university, adult, or parent.
2. WHEN school-age is chosen, THE Platform SHALL NOT ask that child for a phone number, a phone code, or a card.
3. WHEN a parent is chosen, THE Platform SHALL treat the following phone as the phone that covers every school-age account the parent attaches by that child’s sign-in email. The specimen shows two children. The household SHALL NOT be capped at two.
4. THE Platform SHALL NOT ask for a school or course password on this step or any later step.

### Requirement 2: Sign in with email or Google (Must)

**User Story:** As a learner or parent, I want to sign in with email or Google, so that I can enter without handing Escolent the school password.

#### Acceptance Criteria

1. WHEN sign-in is shown, THE Platform SHALL offer email and Google. Both are first-class.
2. WHEN the email does not contain `@`, THE Platform SHALL refuse to continue.
3. WHEN sign-in succeeds, THE Platform SHALL create or attach one account. A second email for the same phone MUST NOT start a second trial.
4. WHEN sign-in fails, THE Platform SHALL say so in plain language and offer another try.
5. THE Platform SHALL NOT collect a school password, a course password, or any `input` of type password.
6. WHEN a live session already exists, THE Platform SHALL open that person’s shell. It SHALL NOT replay sign-up and SHALL NOT start another trial. A school-age session SHALL omit billing.
7. Email or Google SHALL finish inside this door. THE Platform SHALL NOT add a password screen and SHALL NOT add an inbox step. A school-age learner has no second factor on this door.
8. WHEN email sign-in is used, THE Platform SHALL send a six-digit code and SHALL accept that code on this same step. Google SHALL NOT ask for that code. THE Platform SHALL NOT send a magic link and SHALL NOT show an inbox step. An empty code, or a code that is not six digits, stays on this step.

### Requirement 3: Confirm a phone before a payer enters (Must)

**User Story:** As a university student, adult, or parent, I want to enter my phone number and confirm it with a six-digit code, so that the trial can bind to that phone. As a parent, I want to attach each child by the email they use to sign in. As a school-age learner, I want that step skipped.

#### Acceptance Criteria

1. WHEN a university student, adult, or parent continues past sign-in, THE Platform SHALL ask for the phone number, then for a six-digit code sent to that number. No card is asked here. The design-system step that shows only the code is catalog shorthand. Production SHALL collect the number first.
2. WHEN the number is empty, or the platform cannot send a code to it, THE Platform SHALL stay on that step. WHEN the code is not six digits, THE Platform SHALL refuse it.
3. WHEN a school-age learner continues past sign-in, THE Platform SHALL skip the phone number and the code. A parent confirms the phone and attaches that child by the child’s sign-in email.
4. WHEN a parent’s code is accepted, THE Platform SHALL ask for the child’s sign-in email before the map. There is no grant and no skill name on the parent door. An empty email stays on that step. The map opens after an email is accepted.
5. WHEN the email is already attached to a phone, or is the parent’s own sign-in email, or belongs to a university or adult account, THE Platform SHALL NOT attach it and SHALL NOT move it. The child SHALL NOT be told. The other phone number SHALL NOT be shown.
6. WHEN the email is not an account yet, THE Platform SHALL reserve it on that phone. WHEN that email later signs in as school-age, THE Platform SHALL join it to the household and SHALL NOT start a second trial. WHEN that email later signs in as a university student or an adult, THE Platform SHALL NOT join it and SHALL NOT block that sign-in. The reservation ends. WHEN the email is already a school-age account, THE Platform SHALL attach that account, keep its map, and SHALL NOT reset its labels.
7. WHEN Account is shown to a payer, THE Platform SHALL show the bound phone as read-only and SHALL say this phone stays with the trial. A new number does not start another seven days. A parent’s Account SHALL also let them attach another child by sign-in email, under the same rules as criteria 5 and 6. That control is not a new place in the bar.
8. The phone in the design-system specimen, +1 555 0100, is a specimen. Production SHALL show the payer’s confirmed phone. Engineering SHALL NOT ship the specimen number as a live account.

### Requirement 4: Grant a real course page (Must)

**User Story:** As a learner, I want to grant a page I already have, a connection I can authorize alone, or a file, so that Escolent can read a real course without offering one.

#### Acceptance Criteria

1. WHEN a learner reaches grant, THE Platform SHALL offer exactly four doors: the page already open, a read connection, a file, and “this page cannot be read.”
2. WHEN a read connection is chosen, THE Platform SHALL list only Canvas, Google Classroom, Moodle, Blackboard, and Brightspace, and only as connections the learner can authorize alone.
3. WHEN no connection is selected and the learner continues, THE Platform SHALL ask them to choose one.
4. WHEN a file is chosen, THE Platform SHALL accept a file the learner supplies and SHALL NOT offer a course of Escolent’s own.
5. WHEN the page or file cannot be read, THE Platform SHALL add no skill, add nothing to the graph, and SHALL NOT start the trial from that page.
6. A school administrator is not part of this door.
7. WHEN Continue is used on the file door with no file chosen, THE Platform SHALL stay on that step and SHALL say to choose a file first.
8. WHEN the page already open is chosen and the extension is not present, THE Platform SHALL NOT read. No skill is added, nothing is written to the graph, and the trial does not start from that door.
9. WHEN the page or file cannot be read, THE Platform SHALL show “Not enough to judge,” SHALL draft no name, and SHALL NOT offer Enter the shell.

### Requirement 5: Allow the read of the page already open (Must)

**User Story:** As a learner, I want Escolent to ask before it reads the page already open in this browser, so that permission is for this read.

#### Acceptance Criteria

1. WHEN the learner chooses the page already open, THE Platform SHALL show Allow this read before any skill name is drafted.
2. THE Platform SHALL say that permission is for this read, that it does not hold the password, does not sign the learner in on a cloud computer, and does not click, submit, or press Next.
3. WHEN the learner does not allow, THE Platform SHALL treat the page as unreadable: no skill, nothing added to the graph, trial not started from this page, and no Enter the shell.
4. WHEN the learner allows, THE Platform SHALL draft a skill name from that page.
5. Allow this read SHALL appear only for the page already open. A read connection and a file SHALL skip it and go to the skill name.
6. WHEN the extension is absent, THE Platform SHALL NOT perform the open-page read (Requirement 4).

### Requirement 6: Confirm a skill name, and reuse the row (Must)

**User Story:** As a learner, I want to confirm the drafted skill name, so that a later page with the same name reuses the row.

#### Acceptance Criteria

1. WHEN a page, connection, or file can be read, THE Platform SHALL draft a skill name from that source and let the learner edit it before confirm. A model MAY draft the name. Only Confirm writes or reuses the row. The model SHALL NOT set the label.
2. WHEN the name is empty, THE Platform SHALL refuse confirm, write no row, and SHALL NOT offer Enter the shell.
3. WHEN the learner confirms, THE Platform SHALL say that a later page with this name reuses the row, and only then SHALL offer Enter the shell.
4. WHEN the learner edits the name after confirm, THE Platform SHALL require Confirm again before Enter the shell.
5. WHEN the confirmed name matches an existing row for that learner, THE Platform SHALL reuse that row. Matching ignores case and surrounding space. The label MUST NOT start over. Two learners MAY each hold a row with the same words.
6. THE Platform SHALL NOT draft a name from an unreadable page.

### Requirement 7: Name the door on the shell (Must)

**User Story:** As a learner, I want the shell to say what it is reading, so that I can see which door I granted.

#### Acceptance Criteria

1. WHEN the learner enters the shell from the page already open, THE Platform SHALL say it is reading the page already open in this browser, that permission is for this read, and that it does not click, submit, or press Next.
2. WHEN the learner enters from a named connection, THE Platform SHALL say it is reading that connection, authorized alone, that it does not hold the password, and that it does not click, submit, or press Next.
3. WHEN the learner enters from a file, THE Platform SHALL say it is reading that file name, that it does not offer the course, and that it does not click, submit, or press Next.
4. WHEN a parent is in the shell, THE Platform SHALL say the parent does not read the child’s page. It SHALL NOT name a child’s page, connection, or file as something the parent is reading.

### Requirement 8: Read without acting (Must)

**User Story:** As a learner, I want Escolent to read and then stop, so that it never drives the course site for me.

#### Acceptance Criteria

1. THE Platform SHALL NOT click, submit, or press Next on the course page.
2. THE Platform SHALL NOT store the course password and SHALL NOT sign the learner in on a cloud computer Escolent operates.
3. WHEN a connection is used, THE Platform SHALL use it only if the learner can authorize it alone.
4. THE Platform SHALL NOT write a grade back to the course site in this MVP.
5. WHEN a course-account user id is stored, THE Platform SHALL take it from the read. THE Platform SHALL NOT ask the learner to type a school id, and SHALL NOT ask for the school password to obtain it.

### Requirement 9: Show the right places, and hide the price from a child (Must)

**User Story:** As each kind of person, I want only my places, so that a child never sees a bill and a parent never lands in Practice.

#### Acceptance Criteria

1. WHEN the person is school-age, THE Platform SHALL show Today, Learn, Practice, and Progress. It SHALL NOT show Account.
2. WHEN the person is a university student or an adult, THE Platform SHALL show those four places and Account.
3. WHEN the person is a parent, THE Platform SHALL show Progress and Account only, and SHALL open on Progress.
4. WHEN a place is selected, THE Platform SHALL paint that place with its own color on the school-age face. On the calm face, every selected place SHALL use the one blue.
5. THE Platform SHALL show the price only on Account, and only to a university student, an adult, or a parent.
6. THE Platform SHALL NOT show a price, “payment failed,” or “number already used” on any school-age surface, including Today, Learn, Practice, Progress, the helpline, and failure states.
7. Helpline and the graph SHALL NOT be places in the bar. Helpline sits under the read line and on the front door (Requirement 36). The graph chain is part of Progress (Requirement 25). School-age stays at four places, a payer at five, a parent at two.

### Requirement 10: Two faces, one shell (Must)

**User Story:** As a school-age learner I want the colorful shell, and as everyone else I want the calm shell, so that the product matches the day I am in.

#### Acceptance Criteria

1. WHEN the person is school-age, THE Platform SHALL use the colorful face: Today amber, Learn coral, Practice blue, Progress teal, and Outfit for display type.
2. WHEN the person is a university student, an adult, or a parent, THE Platform SHALL use the calm face: cool paper, one blue, and Plus Jakarta Sans for display and body.
3. THE Platform SHALL keep one set of controls across both faces. The face is a presentation of the same shell, not a second product.
4. WHEN the viewport is narrow, THE Platform SHALL move the places to a bottom bar. A child still has four. A parent still has two. A university student or adult still has five, including Account.

### Requirement 11: School-age Today, with the week (Must)

**User Story:** As a school-age learner, I want today and the week, so that school deadlines sit beside Escolent work without being graded by Escolent.

#### Acceptance Criteria

1. WHEN Today opens, THE Platform SHALL show the Escolent skill from the page already open, with a freshness word, and a way to practice it.
2. WHEN other class work cannot be checked, THE Platform SHALL show it as dashed reference with its due day. Escolent SHALL NOT grade it.
3. WHEN Week is on, THE Platform SHALL group the same rows under the days they belong to, including today and the due days.
4. WHEN practice is waiting, THE Platform SHALL say practice waits and the map stays on the Escolent row, and SHALL keep the reference deadlines visible.
5. THE Platform SHALL NOT show a price on Today.
6. Today and Week SHALL be a control on Today, not a place. Today SHALL be the default. School-age and university have this control. Adults do not (Requirement 13).

### Requirement 12: University Today, with several courses (Must)

**User Story:** As a university student, I want several courses on Today and on the week, so that I can see the page I am practicing and the work Escolent will not grade.

#### Acceptance Criteria

1. WHEN Today opens, THE Platform SHALL tag each row with its course and show the Escolent skill from the page already open.
2. WHEN other course work cannot be checked, THE Platform SHALL show it as reference, with the due day, and SHALL say Escolent does not grade it.
3. WHEN Week is on, THE Platform SHALL group rows under their days.
4. THE Platform SHALL NOT show a school-age essay as if it were this student’s work. The rows come from that student’s courses.
5. THE Platform SHALL NOT show the price on Today.
6. Today and Week SHALL be the same control as Requirement 11. Today SHALL be the default.

### Requirement 13: Adult Today, without a calendar (Must)

**User Story:** As an adult, I want Today to continue the last miss and then the skill that has gone stale, so that I am not given a due date I do not have.

#### Acceptance Criteria

1. WHEN an adult opens Today, THE Platform SHALL NOT show a Week control and SHALL NOT show a due date.
2. THE Platform SHALL continue the skill of the last miss, from the page already open or from the named connection or file.
3. THE Platform SHALL then show a skill that has gone stale, labeled tentative, with the words that there is no due date.
4. WHEN practice is waiting, THE Platform SHALL say practice waits and the map stays, and SHALL still not invent a due date.
5. Specimen courses in the design system, including Introduction to Python, SHALL NOT be treated as a catalog Escolent offers. Any adult course the learner already has follows these same rules.

### Requirement 14: Show freshness without using color alone (Must)

**User Story:** As a learner, I want a freshness word on work that comes from a course site, so that I know whether the read is current.

#### Acceptance Criteria

1. WHEN a reference row is shown, THE Platform SHALL show a freshness word: fresh, stale, or syncing.
2. THE Platform SHALL NOT rely on hue alone for that word. Shape carries the state.
3. WHEN the page cannot be read right now, THE Platform SHALL use the offline state in Requirement 35, not a fake fresh row.

### Requirement 15: Learn from their page, with a different worked example (Must)

**User Story:** As a learner, I want a short lesson from the page I already opened, and one worked example of a different problem, so that I can see the skill without being given the practice answer.

#### Acceptance Criteria

1. WHEN Learn opens, THE Platform SHALL name the skill, its label, and the source (page already open, connection, or file).
2. THE Platform SHALL show a short lesson taken from that source.
3. THE Platform SHALL show one worked example of a **different** problem from the practice problem, including the steps of that example.
4. THE worked example SHALL NOT be the unsolved practice problem, and SHALL NOT be the problem the ask is refusing to solve.
5. WHEN the learner is an adult, THE Platform SHALL NOT invent a due date in the lesson.
6. THE Platform SHALL offer a way to practice this skill when practice is open, and SHALL hide that way when practice is waiting.

### Requirement 16: Ask what the skill is, what is due, and not for the answer (Must)

**User Story:** As a learner, I want to ask what this skill is and what is due, and I want a refusal when I ask for the unsolved answer, so that the ask helps without finishing the problem.

#### Acceptance Criteria

1. WHEN the learner asks what the skill is, THE Platform SHALL explain the skill from the page they opened.
2. WHEN the learner asks what is due, THE Platform SHALL name the reference deadlines for a school-age or university learner, and SHALL say there is no due date for an adult.
3. WHEN the learner asks for the answer to the unsolved problem, THE Platform SHALL refuse. The reply SHALL say the answer stays theirs and MAY ask what they already tried. The reply SHALL NOT include the solution.
4. WHEN the ask does not go through, THE Platform SHALL say it did not go through and SHALL NOT give the answer (Requirement 38).
5. THE Platform SHALL NOT use the ask to paint a mastery label.
6. WHEN Ask is used with an empty field, THE Platform SHALL say to ask about this skill or what is due, and SHALL NOT answer a problem.
7. WHEN the ask is not about what the skill is or what is due, THE Platform SHALL reply that the ask covers those two things and SHALL NOT solve the practice problem.
8. WHILE an ask is in flight, THE Platform SHALL show a waiting state. The foundations specimen uses “Thinking.” That state SHALL NOT reveal an answer and SHALL NOT paint a label.

### Requirement 17: Practice one checkable problem (Must)

**User Story:** As a learner, I want one problem and a Check action, so that I am the one who solves it.

#### Acceptance Criteria

1. WHEN Practice is open, THE Platform SHALL show one checkable problem for the current skill and Check as the only action on that problem.
2. WHEN Check is used with an empty field, on the original problem or on the easier version, THE Platform SHALL say to enter an answer and SHALL NOT reveal the answer. The design-system specimen that stays silent on an empty easier Check SHALL NOT be copied.
3. THE Platform SHALL NOT show a hint control.
4. THE Platform SHALL NOT reveal the correct answer in the problem chrome, the error text, or the pass text.
5. A school-age face SHALL NOT show a price on Practice.

### Requirement 18: A miss brings an easier version of the same problem (Must)

**User Story:** As a learner, I want a miss to bring an easier version of the same problem, aimed at the last wrong step, so that I still perform the skill.

#### Acceptance Criteria

1. WHEN the answer is wrong, THE Platform SHALL show an easier version of the **same** problem and SHALL say what the miss was, without stating the correct answer.
2. WHEN the easier answer is wrong, THE Platform SHALL say it is not this time and that the step is still theirs. It SHALL NOT reveal the answer.
3. WHEN the easier answer is right, THE Platform SHALL say this try is right and that the original problem is still theirs to solve.
4. THE Platform SHALL NOT switch the learner to a different skill on a miss.
5. THE Platform SHALL NOT judge an open-writing page by turning it into this easier-problem flow.

### Requirement 19: One right try is not durable (Must)

**User Story:** As a learner, I want a right try to count without being called durable, so that durable still means two different days.

#### Acceptance Criteria

1. WHEN the original problem is answered right, THE Platform SHALL say this try is right and that durable waits for another day.
2. THE Platform SHALL NOT move the label to durable because of a single try.
3. Durable SHALL mean tentative on two different calendar days (Requirement 22).

### Requirement 20: Abstain when the page cannot be checked (Must)

**User Story:** As a learner, I want an essay, a lab report, or project notes to stay unjudged, so that Escolent does not pretend to grade open writing.

#### Acceptance Criteria

1. WHEN the page cannot be checked, THE Platform SHALL show no answer field and no Check.
2. THE Platform SHALL label that page “Not enough to judge.”
3. THE Platform SHALL keep that page as reference. It SHALL NOT become an edge in the graph (Requirement 27).
4. Open writing stays in this state for this MVP. A later version may judge it. This version MUST NOT.

### Requirement 21: Practice waits, and the map stays (Must)

**User Story:** As a learner whose trial has ended or whose payment failed, I want the map to stay and practice to wait, so that I do not lose the graph and I am not given a new problem.

#### Acceptance Criteria

1. WHEN the trial has ended unpaid, or the payment has failed, THE Platform SHALL show no problem on Practice.
2. THE Platform SHALL say the map stays and practice waits.
3. WHEN the person is school-age, THE Platform SHALL NOT say “payment failed” or state the price on that screen.
4. WHEN practice is open again after a successful payment, THE Platform SHALL show a problem again.
5. Reference deadlines on Today SHALL remain visible while practice waits.
6. WHEN the phone has already started a trial (Requirement 33), THE Platform SHALL leave practice open. Practice waits only for an ended unpaid trial or a failed payment.
7. WHEN practice is open, Progress SHALL offer a way to practice the next skill (Requirement 24). That way SHALL be absent for a parent and absent while practice waits.

### Requirement 22: Five labels, moved by code (Must)

**User Story:** As a learner, I want five honest labels, so that I can see how far a skill has come without a model deciding the word.

#### Acceptance Criteria

1. THE Platform SHALL use only these labels for a judged skill: not attempted, struggling, emerging, tentative, durable.
2. WHEN a label changes, code SHALL move it. A model SHALL NOT paint a label.
3. WHEN a skill is tentative on two different calendar days, code SHALL be allowed to call it durable. One day SHALL leave it tentative. The two days are the calendar days of the attempts in the timezone of the device that submitted them. The timezone of this document is not that boundary.
4. THE Platform SHALL store response time and SHALL NOT use response time to choose the label.
5. THE Platform SHALL NOT offer a hint control. A hint is not a practice action in this MVP. The dormant rule, if a hint exists in a later version, is that a hint counts as half a success. That rule MUST NOT add a hint button now.
6. Progress SHALL say that code moves a label and a model never paints one.
7. THE mastery code SHALL be Bayesian Knowledge Tracing with these constants for every skill: prior knowledge 0.10, transit 0.10, slip 0.10, and guess 0.20. THE Platform SHALL NOT use a different bar because a skill is an idea rather than a procedure. A model SHALL NOT paint the label.
8. A right answer on the original problem SHALL count as a full success. A wrong answer on the original problem, and a wrong answer on the easier version, SHALL count as failures. A right answer on the easier version SHALL NOT raise the estimate. An empty Check SHALL NOT be stored as an attempt.
9. After at least one attempt, an estimate below 0.40 SHALL be struggling, an estimate from 0.40 and below 0.85 SHALL be emerging, and an estimate of 0.85 or above SHALL be tentative. Not attempted means no attempt is stored. Durable means the estimate is still 0.85 or above and that bar was reached on two different calendar days. WHEN the estimate falls below 0.85, the label SHALL leave durable.
10. The dormant hint weight of one half SHALL NOT be applied. There is no hint control.

### Requirement 23: A parent sees labels, for each child (Must)

**User Story:** As a parent, I want each child’s map, so that I can see labels without seeing the work.

#### Acceptance Criteria

1. WHEN a parent opens the shell, THE Platform SHALL open on Progress.
2. THE Platform SHALL let the parent switch among the children attached to that phone by sign-in email (Requirement 3). The design system shows a first child and a second child. Those labels are the switcher after the children exist. They are not a cap, and they are not how a child is added. The stored model SHALL NOT be capped at two. Each child is a different map.
3. Every child on that phone SHALL share one trial, then one subscription.
4. THE Platform SHALL show labels, next review, and recent labels. The learner’s recent lines MAY say misses and that durable still waits. The parent’s recent lines SHALL be labels only. THE Platform SHALL NOT show the parent the problem, the answer, or a score.
5. THE Platform SHALL NOT show the price on the map. The price appears only after Account is opened.
6. THE Platform SHALL NOT let the parent read the child’s page.
7. WHEN a parent has attached an email and that child has no confirmed skill, THE Platform SHALL show the map with no skills and SHALL NOT invent a row.

### Requirement 24: Next review (Must)

**User Story:** As a learner or parent, I want to see which skill is next and when, so that the map has a next step.

#### Acceptance Criteria

1. WHEN Progress opens, THE Platform SHALL name the next skill and when it is due for review.
2. WHEN the skill is already durable, THE Platform SHALL say the check keeps it from going stale. It SHALL NOT call the learner back to learn it from zero.
3. WHEN an adult’s skill has gone stale, THE Platform SHALL say the next review is now, and that there is no due date.
4. A parent SHALL see the timing in label language, not as a problem to solve.
5. WHEN practice is open and the person is not a parent, Progress SHALL offer a way to practice the next skill. That way SHALL be absent for a parent and absent while practice waits (Requirement 21).
6. WHEN the next review is scheduled, a miss or an estimate below 0.85 SHALL set it to now. The first day at or above 0.85 SHALL set it to the next calendar day. Once the skill is durable, a successful review SHALL set the gap to 3 days, then 7, then 16, and SHALL stay at 16. This gap is not a course due date. An adult Today SHALL still show no due date.

### Requirement 25: Build the graph now (Must)

**User Story:** As a learner, I want a graph of my confirmed skills, so that mastery stays mine when I leave a course site.

#### Acceptance Criteria

1. THE Platform SHALL store a row per confirmed skill name for that learner.
2. WHEN two sources use the same confirmed name, THE Platform SHALL keep one row. The label SHALL NOT start over.
3. WHEN the learner’s own pages establish that one confirmed skill comes before the next, THE Platform SHALL store an edge. WHEN the read does not establish that order, THE Platform SHALL store no edge. Escolent SHALL NOT author a course outline to fill the gap.
4. THE rows SHALL belong to the learner. A course site SHALL NOT be the store of the graph.
5. THE Platform SHALL NOT offer the course as the owner of these rows.
6. The chain SHALL be part of Progress, not a place of its own. Progress SHALL tell the learner that those rows are the graph.

### Requirement 26: Leave a place for a later check, and do not sell it (Must)

**User Story:** As a learner, I want the graph to be able to hold a later check, so that a future verification product has a row to attach to, without being asked to buy one now.

#### Acceptance Criteria

1. WHEN a graph row is shown, THE Platform MAY show that a later check can sit on that row.
2. THE Platform SHALL say the check is not offered this year.
3. THE Platform SHALL NOT show a price for that check, SHALL NOT take payment for it, and SHALL NOT send the row to a third party for verification in this MVP.
4. A parent SHALL see the same silence: no price, no problem, no answer.
5. The ability to store the check later is SCHEMA-READY ONLY. Operating it is out of this MVP (ADR-004).

### Requirement 27: Pages that cannot be checked are not edges (Must)

**User Story:** As a learner, I want essays and notes kept beside the graph, so that unjudged pages do not pretend to be skills.

#### Acceptance Criteria

1. WHEN a page cannot be checked, THE Platform SHALL NOT create an edge from it.
2. THE Platform SHALL list it beside the chain as reference, labeled “Not enough to judge.”
3. An unreadable page SHALL add nothing to the graph (Requirement 4).

### Requirement 28: Start a seven-day trial only after a real read (Must)

**User Story:** As a new learner, I want seven days without a card, so that I can practice before I pay, and I want that trial to be hard to restart with a new email.

#### Acceptance Criteria

1. THE Platform SHALL offer seven days with no card.
2. THE Platform SHALL start the trial only after the phone is confirmed **and** a real course page, authorized connection, or readable file has been read.
3. WHEN the page cannot be read, THE Platform SHALL NOT start the trial from that page.
4. THE Platform SHALL bind every trial to the confirmed phone.
5. WHEN a new email is used on the same phone, THE Platform SHALL NOT restart the seven days.
6. THE Platform SHALL NOT ask for a card before the first problem.
7. A parent’s confirmed phone SHALL cover every child attached to it by sign-in email (Requirement 3). Those children SHALL share that trial. The specimen shows two children. The stored model SHALL NOT be capped at two (Requirement 23).
8. WHEN the learner is school-age, the phone in criterion 2 SHALL be the parent’s confirmed phone, and the child SHALL be on it only after the parent attaches that child’s sign-in email.
9. WHEN a school-age learner has a successful read and that child’s email is not yet attached to a confirmed parent phone, THE Platform SHALL allow the name to be confirmed and the map to be seen, SHALL keep practice waiting, and SHALL show no price and no billing words. No trial row exists until both gates are true (§16).
10. WHEN a course-account user id is stored, THE Platform SHALL take it from the read (Requirement 8). THE Platform SHALL NOT invent one for a file.
11. WHEN the read is the page already open, THE Platform SHALL also bind the course-account user id from that read and the extension install. Without the extension, that door does not read (Requirement 4). WHEN that read yields no course-account user id, THE Platform SHALL NOT start the trial from it. The name MAY still be confirmed and the map MAY still be seen. Practice stays closed.
12. WHEN the read is an authorized connection, THE Platform SHALL also bind the course-account user id from that connection and SHALL NOT bind an extension. WHEN the connection yields no course-account user id, THE Platform SHALL NOT start the trial from it. The name MAY still be confirmed and the map MAY still be seen. Practice stays closed.
13. WHEN the read is a readable file, THE Platform SHALL bind the phone only. A readable file counts as the read in criterion 2. THE Platform SHALL NOT require an extension for this door.

### Requirement 29: Do not refuse a trial because of a shared network (Must)

**User Story:** As a learner on a shared network, I want the trial rules to ignore that network, so that a school or family network is not treated as fraud.

#### Acceptance Criteria

1. THE Platform SHALL NOT refuse a trial because the network address is shared.
2. THE Platform SHALL NOT use a shared network as a signal that the number was already used.
3. WHEN the trial stored a course-account user id, the accepted remaining hole SHALL stay accepted: a new phone, a new computer, and a new account on a site anyone can register can start another trial. THE Platform SHALL NOT pretend this hole is closed.
4. WHEN the trial is a file trial, THE Platform SHALL bind the phone only (Requirement 28). Another file trial requires a new phone. THE Platform SHALL NOT pretend the file produced an extension install or a course-account user id.

### Requirement 30: End the trial without hiding the map (Must)

**User Story:** As a learner at the end of the seven days, I want the map to remain and practice to wait, so that paying is the way practice opens again.

#### Acceptance Criteria

1. WHEN day seven has passed and the account is unpaid, THE Platform SHALL keep the map and SHALL NOT offer a problem.
2. WHEN the person pays, THE Platform SHALL open practice again.
3. The Account screen for a payer SHALL say which day of the seven it is while the trial runs, that no card was required to start, and that a new email does not restart it.
4. A school-age face SHALL show practice waiting or open, and SHALL NOT show the day-count as a price or a payment story.
5. WHEN a payer subscribes before day seven, THE Platform SHALL accept that payment without restarting the seven days and without a card field in Escolent. Practice is already open during the trial.

### Requirement 31: Pay through the biller, monthly or yearly (Must)

**User Story:** As the person who pays, I want to choose a month or a year and pay without Escolent seeing my card, so that the subscription is real and the card stays with the biller.

#### Acceptance Criteria

1. WHEN a payer chooses Pay, THE Platform SHALL hand the payment to the biller. Year-one biller is Polar (ADR-006). Stripe SHALL NOT be used.
2. THE Platform SHALL offer **$16** a month and **$144** a year.
3. THE Platform SHALL NOT show a card field and SHALL NOT store the card.
4. WHEN Polar reports that the payment succeeded, THE Platform SHALL mark the account paid and open practice. Escolent SHALL NOT offer a control that marks the account paid. The design-system buttons “Payment went through” and “The payment did not go through” are catalog chrome and SHALL NOT be product controls.
5. WHEN Polar reports that the payment failed, THE Platform SHALL mark the payment failed, keep the map, and make practice wait.
6. WHEN a paid payer switches month or year, THE Platform SHALL start that change at the next renewal. The map stays. Practice stays open.
7. A school-age learner SHALL NOT see this handoff.
8. WHEN a payer chooses Pay during the seven days, THE Platform SHALL hand that payment to Polar. The seven days SHALL NOT restart. Practice is already open.

### Requirement 32: Cancel without deleting the map (Must)

**User Story:** As a payer, I want to cancel and keep access until the period ends, so that I am not cut off in the middle of a paid period.

#### Acceptance Criteria

1. WHEN a paid payer cancels, THE Platform SHALL ask them to confirm, and SHALL offer a way to keep the subscription.
2. WHEN cancellation is confirmed, THE Platform SHALL say access lasts until the period ends, the map stays, and practice stays open until then.
3. WHEN the period ends after cancellation, THE Platform SHALL then make practice wait. The map stays.
4. THE Platform SHALL NOT delete the graph because of cancellation.

### Requirement 33: A used number is not a new seven days (Must)

**User Story:** As a payer whose phone already started a trial, I want to be told it is the same trial, so that a new email cannot reset the clock.

#### Acceptance Criteria

1. WHEN the phone has already started a trial, THE Platform SHALL tell the payer it is not a new seven days.
2. THE Platform SHALL say every child attached to that phone shares that trial, then the same subscription. The specimen may mention a second child. The household SHALL NOT be capped at two.
3. THE Platform SHALL say paying does not start a new seven days.
4. WHEN the person looking is school-age, THE Platform SHALL NOT say the number was already used.
5. A shared network SHALL NOT be the reason this message appears (Requirement 29).
6. WHEN this message is shown to a payer, practice SHALL stay open. Practice waits only for an ended unpaid trial or a failed payment (Requirement 21).

### Requirement 34: Still reading adds nothing (Must)

**User Story:** As a learner, I want a clear waiting state while the page is still being read, so that no skill appears before the read finishes.

#### Acceptance Criteria

1. WHEN the page is still being read, THE Platform SHALL say so and SHALL NOT show a skill name.
2. THE Platform SHALL NOT add a row to the graph in this state.
3. THE Platform SHALL NOT paint a mastery label in this state.
4. A parent SHALL NOT see this still-reading state (Requirement 35).

### Requirement 35: Offline keeps the map and waits (Must)

**User Story:** As a learner, I want an honest offline state, so that a failed read does not invent a skill or a problem.

#### Acceptance Criteria

1. WHEN the page cannot be read right now, THE Platform SHALL say so.
2. THE Platform SHALL keep the map, make practice wait, and add nothing to the graph.
3. THE Platform SHALL NOT show a problem or an answer in this state.
4. WHEN the person is a parent, THE Platform SHALL say the map stays. THE Platform SHALL NOT show the child’s problem, SHALL NOT show still-reading, and SHALL NOT show an ask.

### Requirement 36: A helpline with no promise (Must)

**User Story:** As any person in the shell, I want a helpline, so that I can try to reach a person, without being promised a reply and without seeing a price beside it.

#### Acceptance Criteria

1. THE Platform SHALL show a helpline control on the learner shell and on the front door.
2. WHEN a helpline number is configured, THE Platform SHALL show that number and SHALL say a person can be reached there and that there is no promise of a reply.
3. THE Platform SHALL NOT place the price on the helpline.
4. THE Platform SHALL NOT promise that Escolent will answer.
5. The number in the design-system specimen, +1 555 0199, is a specimen. Production SHALL read the deployment value `HELPLINE_NUMBER`. Engineering SHALL NOT ship the specimen number. WHEN that value is unset, THE Platform SHALL keep the control and SHALL say the line is not published yet. It SHALL NOT show the specimen number.
6. Helpline SHALL sit under the read line and on the front door. It SHALL NOT be a place in the bar (Requirement 9).
7. The account specimen phone +1 555 0100 is a specimen under the same rule (Requirement 3).

### Requirement 37: Sign out (Must)

**User Story:** As a university student, adult, or parent, I want to sign out, so that the next person on the device is not in my account.

#### Acceptance Criteria

1. WHEN a payer signs out, THE Platform SHALL end the session on the server and return to the front door.
2. THE Platform SHALL NOT delete the graph on sign-out.
3. THE Platform SHALL NOT restart the trial on sign-out.
4. A school-age learner has no Account screen. Sign-out for that face is not a child-facing billing control. Session end for a child follows the parent account that covers them.
5. The design-system control that resets billing to Running on sign-out is catalog chrome. Sign-out SHALL NOT mark the account paid and SHALL NOT restart the trial.

### Requirement 38: See failure without an answer (Must)

**User Story:** As a learner, I want a failed ask to fail honestly, so that an error is not an excuse to receive the solution.

#### Acceptance Criteria

1. WHEN the ask fails, THE Platform SHALL say the ask did not go through and that the answer stays with the learner.
2. THE reply SHALL NOT include the solution of the refused problem.
3. THE Platform SHALL NOT paint a label because the ask failed.
4. A parent SHALL NOT see this failed-ask state (Requirement 35).

### Requirement 39: Store response time and ignore it (Must)

**User Story:** As a learner, I want speed kept out of my label, so that a fast guess cannot look like mastery.

#### Acceptance Criteria

1. WHEN a practice attempt is stored, THE Platform SHALL store the response time.
2. THE Platform SHALL NOT read that time when choosing not attempted, struggling, emerging, tentative, or durable.
3. THE Platform SHALL NOT show response time as a score to a parent.

### Requirement 40: Export or delete my graph (Should)

**User Story:** As a learner or parent, I want to take or delete the graph later, so that leaving is possible. This is not a screen in the current design system.

#### Acceptance Criteria

1. THE Platform SHOULD be able to export the learner’s graph in a machine-readable form, and to delete it on request.
2. This requirement is Should. The current design system has no export screen. Engineering SHALL NOT block the rest of the MVP on this screen.
3. IF counsel requires export or deletion before a public launch, Tychique records that as a decision before it becomes Must.
4. Deletion SHALL revoke access. It SHALL NOT be the same action as sign-out or cancellation.

### Requirement 41: Remember the extension across restarts (Should)

**User Story:** As a learner, I want the extension I already installed to stay the one the trial is bound to, so that reinstalling casually is not a new trial.

#### Acceptance Criteria

1. THE Platform SHOULD treat a reinstall on the same browser profile as the same extension install when the platform can tell.
2. THE Platform SHALL still refuse to treat a shared network as that signal (Requirement 29).
3. Exact reinstall detection that the browser cannot support SHALL fail open to the accepted hole in Requirement 29, not to a false “number already used.”

---

## 4. E1 — Front door

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 1, 2, 3, 4, 5  
**Primary users:** all four personas  
**Promise:** Who you are, sign in, phone when required, then a real read or the parent’s map.

### Purpose, in, out

**Purpose.** Get a person to a shell only after the door that matches them.

**In.** Who you are. Email or Google. Phone number, then the six-digit code, for payer roles. A child’s sign-in email for a parent. Grant for learners. Allow this read. Unreadable stop.

**Out.** School password. Card. Parent grant. Admin-approved connection keys.

### Engineering rows

| ID | Requirement |
|---|---|
| E1-01 | WHEN the door opens, THEN the four roles are offered before any other field. |
| E1-02 | WHEN email is submitted without `@`, THEN continue is refused. |
| E1-03 | WHEN Google is chosen, THEN the platform uses the signed-in Google identity and still does not ask for a school password. |
| E1-04 | WHEN the role is school-age, THEN the next step after sign-in is grant, not a phone number and not a code. |
| E1-05 | WHEN the role is university, adult, or parent, THEN the phone number is collected before the code. An empty number, or a number that cannot receive a code, stays on that step. A code that is not six digits is refused, and a six-digit code continues. |
| E1-06 | WHEN the role is parent and the code is accepted, THEN the next screen asks for the child’s sign-in email. An empty email stays there. The map opens after an email is accepted. Skill name and Allow this read are absent. |
| E1-07 | WHEN a learner chooses the page already open, THEN Allow this read is shown before a skill name. |
| E1-08 | WHEN the learner does not allow, THEN no skill is drafted, nothing is added to the graph, and the trial does not start from that page. |
| E1-09 | WHEN a connection is offered, THEN the list is only Canvas, Classroom, Moodle, Blackboard, and Brightspace. |
| E1-10 | WHEN authorize is pressed with no connection chosen, THEN the platform asks for a choice and does not draft a name. |
| E1-11 | WHEN a file cannot be read, or the page cannot be read, THEN the unreadable state is shown and the trial does not start from it. |
| E1-12 | WHEN any door screen renders, THEN no password input exists and no inbox step exists. |
| E1-13 | WHEN a live session exists, THEN the shell opens and sign-up is not replayed. |
| E1-14 | WHEN Continue is pressed on the file door with no file, THEN the step stays and asks for a file. |
| E1-15 | WHEN the open-page door has no extension, THEN nothing is read and Enter the shell is not offered from that attempt. |
| E1-16 | WHEN the unreadable stop is shown, THEN it shows “Not enough to judge” and does not offer Enter the shell. |
| E1-17 | WHEN a connection or a file is chosen, THEN Allow this read is skipped. |
| E1-18 | WHEN email sign-in continues, THEN a six-digit code is entered on that step. Google skips it. No magic link and no inbox screen are built. |
| E1-19 | WHEN a parent submits a child email that is already on a phone, is the parent’s own email, or belongs to a university or adult account, THEN it is not attached and the child is not told. |
| E1-20 | WHEN a parent submits a child email that is not an account yet, THEN that email is reserved on the phone and a later school-age sign-in with it joins the household. A later university or adult sign-in does not join and is not blocked. An existing school-age account keeps its map. |
| E1-21 | WHEN a parent uses Account, THEN another child can be attached by sign-in email. That control is not a new place. |

### State machine — door

```
who → sign → email code (skip if Google) → phone number → code (skip both if school-age) → grant → permit (only for the open page)
                                                                                          → connection → skill
                                                                                          → file → skill
                                                                                          → unreadable (stop)
parent: who → sign → email code (skip if Google) → phone number → code → child email → map
```

### Failure modes (E1)

| Condition | Behavior |
|---|---|
| Bad email | Stay on sign-in |
| Email code not six digits | Stay on the email code |
| Empty phone number | Stay on the number |
| Short code | Stay on the code |
| Empty child email | Stay on the child email |
| Child email already on a phone | Do not attach. Do not tell the child |
| Don’t allow | Unreadable stop |
| Empty connection | Stay on the connection list |
| Unreadable file or page | No skill, no trial start |

---

## 5. E2 — Inhabit

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 7, 8  
**Promise:** Read, name the door, do not act.

### Engineering rows

| ID | Requirement |
|---|---|
| E2-01 | WHEN the shell opens for a learner, THEN the read line names the door: page already open, connection name, or file name. |
| E2-02 | WHEN the shell opens for a parent, THEN the line says the parent does not read the child’s page. |
| E2-03 | WHEN a read is performed, THEN the platform does not click, submit, or press Next. |
| E2-04 | WHEN a connection is authorized, THEN the platform does not retain the course password. |
| E2-05 | WHEN the extension reads the page already open, THEN the permission is for that read, in the learner’s own browser. |
| E2-06 | WHEN the learner has not installed the extension and has not granted a connection or a file, THEN there is no silent cloud login to the course site. |
| E2-07 | WHEN a course-account user id is stored, THEN it comes from the read. The learner does not type a school id. |

### Explicitly out of E2

Cloud browsers signed into the school. Grade write-back. Acting as the learner on Next, Submit, or equivalent controls.

---

## 6. E3 — Skill name

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirement 6  
**Promise:** A drafted name, a human confirm, one row forever for that name.

### Engineering rows

| ID | Requirement |
|---|---|
| E3-01 | WHEN a source can be read, THEN a skill name is drafted from that source and shown for edit. |
| E3-02 | WHEN confirm is pressed on an empty name, THEN confirm is refused, no row is written, and Enter the shell is absent. |
| E3-03 | WHEN confirm succeeds, THEN the row is created or reused by normalized name for that learner. Normalization ignores case and surrounding space. |
| E3-04 | WHEN a later page confirms the same name, THEN the existing row is reused and the label does not reset. |
| E3-05 | WHEN the source is unreadable, THEN no draft is created. |
| E3-06 | WHEN the role is parent, THEN this module does not run. |
| E3-07 | WHEN Confirm has not succeeded, or the name is edited after confirm, THEN Enter the shell is absent. |
| E3-08 | WHEN a model drafts a name, THEN only Confirm writes the row, and the model does not set the label. |

---

## 7. E4 — Shell and faces

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 9, 10  
**Promise:** One shell. Two faces. Price only where the payer is.

### Engineering rows

| ID | Requirement |
|---|---|
| E4-01 | WHEN the role is school-age, THEN the places are Today, Learn, Practice, Progress. |
| E4-02 | WHEN the role is university or adult, THEN Account is added. |
| E4-03 | WHEN the role is parent, THEN the places are Progress and Account, and the first paint is Progress. |
| E4-04 | WHEN a school-age place is selected, THEN it wears that place’s color. |
| E4-05 | WHEN a calm place is selected, THEN it wears the one blue. |
| E4-06 | WHEN the width is below 760 pixels, THEN the places move to the bottom bar and every label remains readable, including Account on a five-place face. |
| E4-07 | WHEN any school-age surface renders, THEN the strings for price, payment failed, and number already used are absent. |
| E4-08 | WHEN display type is resolved, THEN school-age display type is Outfit and calm display type is Plus Jakarta Sans. |
| E4-09 | WHEN the bar is built, THEN Helpline and the graph are not places. Place counts stay four, five, and two. |

---

## 8. E5 — Today

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 11, 12, 13, 14  
**Promise:** The formal day first. The adult day without a calendar.

### Engineering rows

| ID | Requirement |
|---|---|
| E5-01 | WHEN a school-age or university learner opens Today, THEN the Escolent row names the skill from the granted door and offers practice when practice is open. |
| E5-02 | WHEN reference work has a due day, THEN it is dashed, named, and marked as not graded by Escolent. |
| E5-03 | WHEN Week is selected, THEN rows group under their days. Week exists for school-age and university only. |
| E5-04 | WHEN the role is adult, THEN Week is absent, no due date is shown, the first row is the last miss, and the next row is a stale skill. |
| E5-05 | WHEN practice is waiting, THEN the Escolent row says practice waits and the map stays. Reference due days remain for roles that have them. |
| E5-06 | WHEN freshness is shown, THEN the word is fresh, stale, or syncing, and the glyph is not hue alone. |
| E5-07 | WHEN school-age or university Today renders, THEN Today and Week are a control on that screen, and Today is the default. |

### Explicitly out of E5

A week for adults. Grading reference work. Prices.

---

## 9. E6 — Learn and the ask

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 15, 16, 38  
**Promise:** A lesson, a different example, a refusal.

### Engineering rows

| ID | Requirement |
|---|---|
| E6-01 | WHEN Learn opens, THEN the lesson source matches the inhabit door. |
| E6-02 | WHEN a worked example is shown, THEN it is a different problem from the practice problem and from the problem the ask refuses. |
| E6-03 | WHEN the learner asks what the skill is, THEN the reply explains that skill and does not give the unsolved answer. |
| E6-04 | WHEN the learner asks what is due, THEN school-age and university replies name reference days, and the adult reply says there is no due date. |
| E6-05 | WHEN the learner asks for the unsolved answer, THEN the reply refuses and does not contain the solution. |
| E6-06 | WHEN the ask fails, THEN the reply says it did not go through and does not contain the solution. |
| E6-07 | WHEN the ask runs, THEN it does not write a mastery label. |
| E6-08 | WHEN Ask is empty, or the question is off the skill and what is due, THEN the reply stays inside those bounds and does not solve the problem. |
| E6-09 | WHEN the ask is in flight, THEN a waiting state is shown, the specimen word being Thinking, with no answer and no label write. |
| E6-10 | WHEN the role is parent, THEN still-reading and the failed ask are not rendered. |

---

## 10. E7 — Practice

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 17, 18, 19, 20, 21, 39  
**Promise:** They solve it. A miss stays on the same problem. One try is not durable.

### Engineering rows

| ID | Requirement |
|---|---|
| E7-01 | WHEN practice is open, THEN one checkable problem is shown and Check is the only action. |
| E7-02 | WHEN Check is empty on the original problem or the easier version, THEN the platform says to enter an answer and does not reveal it. The silent easier Check in the specimen is not copied. |
| E7-03 | WHEN the answer is wrong, THEN an easier version of the same problem is shown, aimed at the last wrong step, without the correct value. |
| E7-04 | WHEN the easier try is right, THEN the original problem remains to be solved. |
| E7-05 | WHEN the original try is right, THEN the copy says durable waits for another day. |
| E7-06 | WHEN the page cannot be checked, THEN there is no answer field and the label is “Not enough to judge.” |
| E7-07 | WHEN the trial has ended unpaid or the payment has failed, THEN Practice shows no problem. A used number does not take this path. |
| E7-08 | WHEN an attempt is stored, THEN response time is stored and is not an input to the label. A right answer on the easier version does not raise the estimate. An empty Check is not stored. |
| E7-09 | WHEN Practice renders, THEN no hint control is present. |

### State machine — one problem

```
ask → pass (original)
    → miss → easier ask → easier pass (original still open)
                       → easier again (step still theirs)
```

---

## 11. E8 — Progress and the parent map

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 22, 23, 24  
**Promise:** Labels. Parents see nothing else.

### Engineering rows

| ID | Requirement |
|---|---|
| E8-01 | WHEN Progress renders, THEN the five labels are visible and each skill shows one of them, or “Not enough to judge” when it cannot be checked. The chain is part of this place, not its own tab. |
| E8-02 | WHEN a label is displayed, THEN it was chosen by Bayesian Knowledge Tracing from attempt history, not by a model. Constants are prior 0.10, transit 0.10, slip 0.10, guess 0.20. Below 0.40 is struggling, below 0.85 is emerging, 0.85 or above is tentative, and durable needs that bar on two device calendar days while the estimate stays there. |
| E8-03 | WHEN two tentative days are different calendar days, THEN code may show durable. One calendar day stays tentative. |
| E8-04 | WHEN the role is parent, THEN the problem, the answer, and any score are absent. Recent lines are labels only. |
| E8-05 | WHEN the parent switches child, THEN the map swaps. Every child attached by sign-in email shares the parent’s trial and subscription. The model is not capped at two. An attached child with no confirmed skill shows an empty map. |
| E8-06 | WHEN next review is shown, THEN it names the skill and the timing in the words of that role, including “now” and “no due date” for a stale adult skill. A miss or an estimate below 0.85 is now. The first day at or above 0.85 is the next calendar day. Durable reviews then wait 3, 7, and 16 days. |
| E8-07 | WHEN practice is open and the role is not parent, THEN Progress offers a way to practice the next skill. |

---

## 12. E9 — The graph

**Status:** CURRENT BUILD TARGET for rows, edges, reuse, and portability. **SCHEMA-READY ONLY** for a later check.  
**Owns:** Requirements 25, 26, 27  
**Promise:** The graph is built in year one. The check on a row is not a product this year.

### Engineering rows

| ID | Requirement |
|---|---|
| E9-01 | WHEN a skill name is confirmed, THEN a graph row exists for that learner and that name. |
| E9-02 | WHEN the same name is confirmed again, THEN the same row is updated. A second row is not created. |
| E9-03 | WHEN one confirmed skill is the predecessor of another because the learner’s own pages establish that order, THEN an edge is stored. Unknown order stores no edge. |
| E9-04 | WHEN a page cannot be checked, THEN it is stored as reference, not as an edge. |
| E9-05 | WHEN an unreadable page is declined, THEN no row and no edge are written. |
| E9-06 | WHEN the graph is shown, THEN the copy says the rows belong to the learner and the course site does not keep them. |
| E9-07 | WHEN a row is shown with a later-check place, THEN the copy says it is not offered this year, and no price is rendered. |
| E9-08 | WHEN a parent views the graph, THEN they see labels and edges only. |
| E9-09 | WHEN any code path would call a verification provider, THEN that path is absent in this MVP. |
| E9-10 | WHEN the chain is shown, THEN it is part of Progress and not a new place. |

### Explicitly out of E9

A checkout for verification. A public certificate. A school transcript. Selling the graph as a data product.

---

## 13. E10 — Trial and billing

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 28, 29, 30, 31, 32, 33  
**Promise:** Seven days, then the person who pays. The map survives.

### Engineering rows

| ID | Requirement |
|---|---|
| E10-01 | WHEN the confirmed phone, a successful read, and the keys that door must produce all exist, THEN a trial record starts, with an end seven days later, and no card on file. |
| E10-02 | WHEN either the phone or the successful read is missing, THEN the trial does not start. For a school-age learner the phone exists only after that child’s sign-in email is attached to it. |
| E10-03 | WHEN the same phone already has a trial, THEN a new email does not create another seven days. An open-page trial also matches on its extension install or its course-account user id. A connection trial also matches on its course-account user id. A file trial matches on the phone. |
| E10-04 | WHEN the only shared signal is the network address, THEN the trial is not refused. |
| E10-05 | WHEN the trial end is reached unpaid, THEN entitlement leaves practice closed and leaves the graph readable. |
| E10-06 | WHEN a payer pays, THEN the handoff is Polar. Paid and failed come from Polar’s report, not from a control inside Escolent. The card number never lands in Escolent storage. |
| E10-07 | WHEN the payer selects a plan, THEN the amount is $16 per month or $144 per year. |
| E10-08 | WHEN payment fails, THEN practice closes and the graph stays. The school-age face does not receive the failure words. |
| E10-09 | WHEN a paid plan is cancelled, THEN access continues until the period end, then practice waits. The graph is kept. |
| E10-10 | WHEN another child is attached by sign-in email, THEN that child joins the existing trial and the later subscription. The household is not capped at two. |
| E10-11 | WHEN Stripe is proposed as the year-one biller, THEN the proposal is rejected. Paddle may be a spare. Polar is first. |
| E10-12 | WHEN Pay is used during the seven days, THEN the seven days do not restart and practice is already open. |
| E10-13 | WHEN a phone already has a trial, THEN practice stays open. Only trial end and payment failure close practice. |
| E10-14 | WHEN a school-age read exists and that child’s email is not attached to a confirmed parent phone, THEN no trial row is written and practice stays closed. |
| E10-15 | WHEN the read is a file, THEN the trial binds to the phone only. No extension and no course-account user id are required or invented. |
| E10-16 | WHEN the open page or a connection yields no course-account user id, THEN no trial row is written from that read. The map may exist. Practice stays closed. |

### State machine — entitlement

```
(no trial) → trial → paid
                  → free (trial ended, map readable, practice closed)
         paid → past_due (payment failed: map readable, practice closed)
         paid → canceling → free at period end
```

`free` here means the graph remains and practice waits. It does not mean a second seven days. Before the first trial row, the map may already exist and practice stays closed. A used phone number does not enter `free`. A file trial enters this machine bound to the phone only. An open-page or connection read with no course-account user id does not enter it.

---

## 14. E11 — Failure, helpline, and sign-out

**Status:** CURRENT BUILD TARGET  
**Owns:** Requirements 34, 35, 36, 37, 38  
**Promise:** Waiting and failure do not invent a skill or an answer. A person can try the phone. Sign-out ends the session.

### Engineering rows

| ID | Requirement |
|---|---|
| E11-01 | WHEN a read has not finished, THEN no skill name and no graph row are created. |
| E11-02 | WHEN a read fails because the device is offline, THEN the map stays, practice waits, and nothing is added to the graph. |
| E11-03 | WHEN the ask fails, THEN the stored reply does not contain the solution of the refused problem. |
| E11-04 | WHEN helpline is opened, THEN `HELPLINE_NUMBER` is shown when set, with no promise of a reply and no price. When it is unset, the control says the line is not published yet and does not show the specimen number. It is not a place in the bar. |
| E11-05 | WHEN sign-out succeeds, THEN the server session is dead, the door is shown, and the graph rows remain. The catalog reset of billing to Running is not implemented. |
| E11-06 | WHEN a school-age surface is rendered during any E11 state, THEN price and payment-failure language are absent. |
| E11-07 | WHEN the role is parent, THEN still-reading and the failed ask are not shown. The parent is told the map stays. |

---

## 15. Non-functional requirements

### 15.1 Security and access

| ID | Requirement |
|---|---|
| NFR-SEC-01 | WHEN learner data is stored, THEN one learner’s rows are not readable by another learner, and a parent reads only labels for children on their phone. |
| NFR-SEC-02 | WHEN a parent requests a child’s problem or answer, THEN the API refuses. |
| NFR-SEC-03 | WHEN course credentials are involved, THEN they are not written to Escolent storage. |
| NFR-SEC-04 | WHEN a session ends, THEN the server marks it dead. Clearing a cookie alone is not sign-out. |
| NFR-SEC-05 | WHEN a child session is created, THEN billing fields are omitted from the payload, not merely hidden in CSS. |

### 15.2 Mastery and model use

| ID | Requirement |
|---|---|
| NFR-AI-01 | WHEN a mastery label is written, THEN the writer is the mastery code. The model provider is not that writer. |
| NFR-AI-02 | WHEN a model is called, THEN it is called through one provider boundary. Year-one model provider is Anthropic behind that boundary. Product screens do not call the provider directly. |
| NFR-AI-03 | WHEN the ask or the lesson is generated, THEN it must not include the unsolved practice answer. |
| NFR-AI-04 | WHEN a problem can be checked by a deterministic rule, THEN the check is deterministic. A model is not the grader of record for that problem. |
| NFR-AI-05 | WHEN response time is stored, THEN it is excluded from the label function. |

### 15.3 Reliability and states

| ID | Requirement |
|---|---|
| NFR-REL-01 | WHEN a screen in the design system has an empty, waiting, error, or ready state, THEN the built screen has that state. |
| NFR-REL-02 | WHEN practice is closed, THEN no problem payload is sent to the client. |
| NFR-REL-03 | WHEN a read fails, THEN the failure is visible. A skill is not invented to fill the gap. |

### 15.4 Design system

| ID | Requirement |
|---|---|
| NFR-DESIGN-01 | WHEN a learner surface is built, THEN it matches the living design system in `escolent-student-demo` at `/design-system`. |
| NFR-DESIGN-02 | WHEN a second visual language is proposed for the learner MVP, THEN it is rejected. |
| NFR-DESIGN-03 | WHEN the viewport is 320 pixels wide, THEN places, rows, and actions remain on screen without a horizontal page scroll. |
| NFR-DESIGN-04 | WHEN the viewport is at least 760 pixels wide, THEN the places sit in the top bar with the Escolent name. |
| NFR-DESIGN-05 | WHEN a person tabs to a place, a door choice, or an action, THEN a visible focus ring is drawn. |

### 15.5 Privacy

| ID | Requirement |
|---|---|
| NFR-DATA-01 | WHEN a parent account is used, THEN the parent cannot retrieve the child’s problem or answer. |
| NFR-DATA-02 | WHEN trial binding is stored, THEN it stores the confirmed phone. It stores a course-account user id only when the open page or a connection yielded one, and an extension install only for the open-page door. It does not invent either key for a file. It does not store a network address as a refusal key. |
| NFR-DATA-03 | WHEN payment runs, THEN card data stays with Polar. Escolent stores the plan, the status, and the period end. |

### 15.6 Performance

These are engineering targets for the MVP, not separately validated laboratory numbers. They can be tightened in the architecture document. They are not permission to drop a state.

| ID | Requirement |
|---|---|
| NFR-PERF-01 | WHEN Check is pressed on a deterministic problem, THEN the learner sees right, wrong, or “enter an answer” without waiting on a model. |
| NFR-PERF-02 | WHEN the shell paints from data already on the device, THEN places and the read line appear without a blank screen. |

---

## 16. Data model summary

Column-level schema belongs in the architecture document. These are the nouns the requirements depend on.

### 16.1 Identity

| Noun | Purpose |
|---|---|
| `account` | Email or Google identity. Not the trial key by itself |
| `person` | Learner or parent. Role: school, university, adult, parent |
| `household` | Parent phone and the school-age sign-in emails attached to it. Not capped at two |
| `phone_binding` | The phone number the payer entered, confirmed by the six-digit code. The trial binds to it |
| `extension_install` | The install bound only when the door was the page already open |
| `course_account_link` | External course-site user id from an open-page or connection read. Absent for a file. Not a password |

### 16.2 Entitlement

| Noun | Purpose |
|---|---|
| `entitlement` | `trial`, `free`, `paid`, `past_due`, and only after a trial row exists |
| `trial` | Start, end, and the keys that door produced. Always the phone. Also a course-account user id for the open page and for a connection, and an extension install for the open page. Absent until the phone is confirmed, a real read has succeeded, and those keys exist. For a school-age learner the phone is confirmed only once that child’s email is attached |
| `subscription` | Plan `month` or `year`, period end, Polar reference, cancel-at-period-end |

`free` means the graph remains and practice is closed. It is not a second trial. Before a trial row exists, there is no entitlement status: the map may exist after a confirmed name, and practice is closed. A used phone number is not this state.

### 16.3 Graph

| Noun | Purpose |
|---|---|
| `skill_row` | Learner, confirmed name, label, abstain flag, first tentative day, second tentative day |
| `skill_edge` | From earlier row to later row, for that learner |
| `skill_source` | Page, connection, or file that confirmed or reused the name |
| `verification_slot` | Nullable place on a row. Unused in this MVP. No price. No provider call |

### 16.4 Study

| Noun | Purpose |
|---|---|
| `attempt` | Problem identity, right or wrong, whether it was the easier step, response time stored and unused |
| `schedule_item` | Optional reference deadline for school-age and university. Absent for adults |
| `freshness` | `fresh`, `stale`, `syncing` on a reference read |

### 16.5 Do not create tables for

A course catalog. Teacher spaces. Grade passback. A verification order. A hint product. Open-writing scores.

---

## 17. Definition of Done and open items

### 17.1 Definition of Done

| # | Gate |
|---|---|
| 1 | The story’s acceptance criteria in §3 pass on the role they name. |
| 2 | The screen matches the design system, including empty, waiting, error, and ready where that part defines them. |
| 3 | A school-age session cannot see price or payment-failure language, including in API payloads. |
| 4 | A parent session cannot fetch a problem or an answer. |
| 5 | A model call cannot write a mastery label. Labels are written by Bayesian Knowledge Tracing using the constants and bands in Requirement 22. |
| 6 | Trial start requires the confirmed phone, a successful read, and the keys that door must produce. A school-age read without that child’s email on the parent phone does not open practice. A new email does not reset the trial. A file trial binds the phone only. |
| 7 | Payment uses Polar. Polar’s report marks paid or failed. No card field exists in Escolent, and no in-product control marks the account paid. |
| 8 | The graph row is reused by confirmed name. An unreadable page writes nothing. |
| 9 | Tychique can walk the story on a running build as the role in the story. |

### 17.2 Open items — people decide these, not the model

| # | Status | Item | Affects |
|---|---|---|---|
| 1 | Decided | The helpline number is the deployment value `HELPLINE_NUMBER`. This document does not contain a live number. The specimen +1 555 0199 must not ship. An unset value keeps the control and says the line is not published yet. | E11-04 |
| 2 | Open | Whether export and deletion become Must before public launch, after counsel. | Requirement 40 |
| 3 | Decided | Bayesian Knowledge Tracing uses prior 0.10, transit 0.10, slip 0.10, and guess 0.20. Label bands and the review gaps are in Requirements 22 and 24. | E8 |
| 4 | Open | Staff shells, when a school is actually a customer. | §1.2 |
| 5 | Decided | Email sign-in is a six-digit code on the door. Google skips it. There is no magic link and no inbox step. Supabase sends that code. | Requirement 2 |

### 17.3 What this document authorises

- Build of modules E1–E11 and the non-functional requirements above.
- Schema for `verification_slot` that stays empty.
- Not authorised: §1.2, a hint button, Stripe, a course catalog, teacher override of labels.

---

## 18. Glossary, journey, happy paths, and inventory edges

### Glossary

- **Platform:** Escolent, the learner window plus the services behind it.
- **Course site:** The place the learner already studies. Escolent does not operate it and does not offer its course.
- **Door:** How a read is granted: page already open, read connection, or file.
- **Skill name:** The confirmed name drafted from a door. The key of a graph row.
- **Row:** One confirmed skill for one learner.
- **Edge:** “This skill comes before that skill” for that learner.
- **Label:** not attempted, struggling, emerging, tentative, or durable. Plus “Not enough to judge” when the page cannot be checked.
- **Durable:** Tentative on two different calendar days.
- **Bayesian Knowledge Tracing:** The code that moves a label. A model does not. Prior 0.10, transit 0.10, slip 0.10, guess 0.20. Tentative starts at 0.85. Durable is that bar on two device calendar days.
- **Abstain:** The page cannot be checked. No answer field. Not an edge.
- **Face:** Colorful for school-age. Calm for university, adult, and parent.
- **Payer:** Parent, university student, or adult. Never the school-age child.
- **Child email:** The email a school-age learner uses to sign in. The parent attaches it to the phone. That attachment is how the child is on the phone.
- **Entitlement:** trial, free, paid, or past_due. Free keeps the map and closes practice.
- **Biller:** Polar in year one. The card stays there.
- **Specimen:** An example in the design system, such as Introduction to Python. Not a course for sale.

### Canonical journey

1. Say who you are.
2. Sign in with email or Google. Email is a six-digit code on that step. Google skips it. No school password and no inbox.
3. If you pay, enter the phone number and confirm the code. A child skips both. A parent then attaches each child by the email that child uses to sign in.
4. A learner grants a real page, an authorized connection, or a file. Allow this read only when the page is already open. A missing extension does not read that page.
5. Confirm the skill name. Enter the shell only after that confirm. The row is created or reused.
6. The shell names the door and refuses to click, submit, or press Next. Helpline is under that line, not in the bar.
7. Today shows the work. Formal learners also see reference deadlines and a Today / Week control. Adults do not.
8. Learn shows the page and a different worked example. The ask refuses the unsolved answer. An empty or off-topic ask stays inside those bounds.
9. Practice opens when the trial is running. For a school-age learner that means the parent has attached that child’s sign-in email and confirmed the phone, and a real page has been read. They solve the problem. A miss brings an easier version of the same problem. One right try is not durable.
10. Progress shows labels and the graph chain. A parent sees only labels, for each child on that phone.
11. A later check on a row is not offered.
12. After seven days, the map stays and practice waits until the payer pays. A used number does not close practice. Cancel keeps access until the period ends. Polar reports the payment.

### Happy paths

| ID | Path | Outcome |
|---|---|---|
| **HP1** | School-age learner, parent has attached that child’s sign-in email and confirmed the phone, page already open, Allow, confirm “Two-step equations”, practice, miss, easier problem | Shell names the open page. No price. Deadlines remain reference. If that email is not attached yet, the map can exist and practice waits |
| **HP2** | University student, Moodle authorized alone, several courses, Week | Read line names Moodle. Lab work stays ungraded |
| **HP3** | Adult, file from the course they already have | No Week, no due date. Last miss, then a stale skill. Same name reuses the row |
| **HP4** | Parent confirms the phone, attaches a child by sign-in email, opens the map, switches to another child | Labels only. One trial, then one subscription. Not capped at two |
| **HP5** | Day seven, unpaid | Map stays. Practice has no problem. Child does not see a price |
| **HP6** | Payer’s payment fails | Practice waits. Payer sees the failure. Child does not |
| **HP7** | Don’t allow, or unreadable file | No skill, no graph write, no trial from that page |
| **HP8** | Payer cancels | Access through the period. Graph remains |

### Inventory edges (IE1–IE12)

| ID | Case | Product behavior |
|---|---|---|
| **IE1** | New email, same phone | Not a new trial |
| **IE2** | Shared network | Not a refusal |
| **IE3** | New phone, new computer, new registrable course account | Accepted hole for a trial that stored a course-account user id. A file trial is bound to the phone only. Do not pretend either hole is closed |
| **IE4** | Unreadable page or file | No skill, no graph write, no trial start |
| **IE5** | Don’t allow | Same as unreadable |
| **IE6** | Open writing | Not enough to judge. Not an edge |
| **IE7** | Ask for the unsolved answer | Refusal. Solution absent |
| **IE8** | Ask fails | Failure text. Solution absent |
| **IE9** | Child opens Account by URL or API | No Account surface and no billing payload |
| **IE10** | Parent requests the problem | Refused |
| **IE11** | Same skill name, later page | One row. Label continues |
| **IE12** | Offline mid-read | Map stays. Practice waits. Nothing added |

---

## 19. Locked decisions

These are the decisions this requirements document will not reopen without Tychique.

### ADR-001 — The design system is the learner interface

**Decision:** The learner MVP is built from the design system in `escolent-student-demo` at `/design-system`. A second visual language is rejected.

### ADR-002 — Escolent does not offer the course

**Decision:** Escolent reads a course the learner already has. It does not sell, host, or assign that course. Specimens are not a catalog.

### ADR-003 — Inhabitation is read-only

**Decision:** No school password. No cloud login operated by Escolent. No click, submit, or Next. Connections are only those the learner can authorize alone: Canvas, Classroom, Moodle, Blackboard, Brightspace.

### ADR-004 — The graph is built; the check is not sold

**Decision:** Rows, edges, and name reuse ship in this MVP. A later check may sit on a row. It is not offered, priced, or sent to a third party this year.

### ADR-005 — Labels belong to code

**Decision:** The five labels are not attempted, struggling, emerging, tentative, and durable. The mastery code is Bayesian Knowledge Tracing with prior knowledge 0.10, transit 0.10, slip 0.10, and guess 0.20, for every skill. Below 0.40 is struggling, below 0.85 is emerging, and 0.85 or above is tentative. Durable means that bar was reached on two different calendar days in the device timezone and the estimate is still there. A right answer on the easier version does not raise the estimate. A model does not paint a label. Response time is stored and unused. Practice has no hint control. If a later version adds a hint, that hint counts as half a success. That weight is not applied now. A miss, or an estimate below 0.85, makes the next review now. The first day at or above 0.85 reviews the next calendar day. Durable reviews then wait 3 days, then 7, then 16.

### ADR-006 — Trial and payment

**Decision:** Seven days, no card, after phone confirmation and a successful read, and only with the keys that door can produce. The payer enters the phone number, then the six-digit code. For a school-age learner the phone is the parent’s. The child is on it only after the parent attaches that child’s sign-in email, and practice waits until that attachment and a real read are both true. Every trial binds to the phone. The open page also binds the course-account user id from the read and the extension install. A connection also binds the course-account user id and does not bind an extension. A file binds the phone only. A missing course-account user id on the open page or a connection does not start the trial. A new email does not restart the trial. A shared network does not refuse it. The accepted hole for a trial that stored a course-account user id is a new phone, a new computer, and a new registrable course account. A file trial restarts only with a new phone. Price is $16 a month or $144 a year, on Account only. Polar is the first biller and Polar’s report marks paid or failed. Paddle is the spare. Stripe is out. Escolent does not store the card and does not offer a control that marks an account paid. When the trial ends unpaid, or a payment fails, the map stays and practice waits. A phone that already started a trial does not close practice. A child never sees payment failure or “number already used.” Paying during the seven days does not restart them.

### ADR-007 — Who the parent is

**Decision:** A parent opens on the map, sees labels only, does not read the child’s page, and covers every child attached by that child’s sign-in email. One trial, then one subscription. The parent enters that email after the phone code, and can attach another later on Account. An email already on a phone is refused and the child is not told. The specimen shows two children. The stored model is not capped at two.

### ADR-008 — What waits

**Decision:** Open writing is not judged in this MVP. Teacher, admin, pedagogical-lead, and help-control shells, grade write-back, and admin-approved connection keys wait until a school is a customer.

### ADR-009 — Identity and data

**Decision:** Sign-in is email or Google, on Supabase Auth, and it finishes inside the front door. Email is a six-digit code entered on that step. Supabase sends the code. It does not send a magic link, and the door has no inbox step. Google returns to the same door and does not ask for the code. No password screen is part of this MVP. The learner graph is stored in Supabase Postgres. Year-one model calls go to Anthropic through one provider boundary. The page-already-open door is a Chrome extension, Manifest V3. The file door, the read-connection door, and the shell itself are not Chrome-only. The helpline number is `HELPLINE_NUMBER` and is not the design-system specimen.

### ADR-010 — This document replaces the handoff

**Decision:** `escolent-student-demo/cursor-handoff/docs/requirements.md` is not the requirements of record. Teacher spaces, a Grade 8 course held by Escolent, LTI grade passback, and teacher override of labels are not requirements of this MVP.

---

## 20. Design-system journey map

The living specimen is the journey. Builders walk `escolent-student-demo` at `/design-system` and match these parts.

| Part | What must be true |
|---|---|
| 1. Shell | Places match the role. Price is absent until Account, and Account is absent for a child. The read line names the door or, for a parent, refuses the child’s page |
| 2. Today | School-age and university have reference deadlines and Week. Adults have last miss, then a stale skill, and no due date |
| 3. Practice | Check only. Empty check asks for an answer. A miss brings an easier same problem. A right try is not called durable. Uncheckable pages abstain |
| 4. Learn and the ask | Lesson plus a different worked example. What the skill is, what is due, and a refusal that does not solve the problem |
| 5. Progress | Five labels. Parent switches child. Labels only. Rows are the graph |
| 6. Front door | Who you are, email or Google, email code on that step, phone number then code when required, a parent attaches the child’s sign-in email, grant, Allow this read only for the open page, confirm the name before Enter the shell. No password and no inbox step |
| 7. Trial and billing | Seven days, pay handoff, cancel, used number. The phone is always a binding key. A file binds nothing else. Child face stays free of price and payment words |
| 8. When it fails | Still reading adds nothing. Offline waits. A failed ask does not answer. A parent sees none of those, only that the map stays. Helpline has no promise and no price, and it is not a place |
| 9. Foundations | One set of controls. Outfit on the colorful face. Plus Jakarta Sans on the calm face. Narrow width uses the bottom bar. Keyboard focus draws a ring |
| 10. The graph | Edges, one row per confirmed name, reference pages that are not edges, an empty check that is not offered this year |

---

## End of this document

This is the requirements of record for the Escolent learner MVP as of 9 October 2026. The structural design of record is `docs/STRUCTURAL-DESIGN.md`. The implementation tasks of record are `docs/IMPLEMENTATION-TASKS.md`.
