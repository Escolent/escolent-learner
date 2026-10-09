# Escolent — Implementation Tasks

**Subtitle:** Test-driven build, from an empty workstation to a live learner MVP  
**Status:** v1.8 — implementation tasks of record. Not started. Ready to build. A green Task 17 is the live host. It is not a public launch.  
**Last updated:** 9 October 2026 (Africa/Cape Town)  
**Owner:** Tychique Lesambo · **Ship authority:** Tychique Lesambo  
**Requirements of record:** `docs/PRODUCT-REQUIREMENTS.md` v1.3  
**Structural design of record:** `docs/STRUCTURAL-DESIGN.md` v1.4  
**Design-system source of truth:** `escolent-student-demo` route `/design-system`  
**Supersedes:** `escolent-student-demo/cursor-handoff/docs/tasks.md`. That file describes the retired school-pilot build. It is not this build.

## Changelog

| Version | Date | Author | Notes |
|---|---|---|---|
| **v1.8** | **9 October 2026** | Tychique Lesambo / engineering | Names the remaining decided behaviors: a wrong or expired code, the reservation delete, the attempt columns, `skill_source`, `ask_turn`, the freshness clock, the Moodle token the learner cannot create, sign-out clearing Supabase, and mastery as the only writer of its columns. |
| **v1.7** | **9 October 2026** | Tychique Lesambo / engineering | Names the five clauses the last pressure test could still skip: a seven-day `ends_at`, a lowercased host with no path, a read token kept off the client and out of logs, an unchanged label after a failed draft, and the 760-pixel place breakpoint. The stored phone is E.164. |
| **v1.6** | **9 October 2026** | Tychique Lesambo / engineering | Adds the six missing tests: Check equivalence, durable return, reference rows, stored page text, learner-against-learner access, and plan renewal. Locks one writer per module so the code stays in the packages in structural design §3. |
| **v1.5** | **9 October 2026** | Tychique Lesambo / engineering | Splits local Playwright from the live host so deploy is not blocked by its own proof. Locks the remaining screen sentences, the edge rules, the unpaid sweeper, the review-ladder reset, and the full problem-acceptance list. |
| **v1.4** | **9 October 2026** | Tychique Lesambo / engineering | Adds the learner-visible state when a read cannot start a trial, the other doors when the extension is absent, and Task 18. Task 18 stays red until a real page, the four roles, the helpline decision, and the export decision are recorded. A green suite does not close it. |
| **v1.3** | **9 October 2026** | Tychique Lesambo / engineering | Closes the seven test holes. ElastiCache never stores a skill, a problem, or an answer key. Account tests the price, the cancel confirm, and the used-number sentences. Freshness covers a changed read. The ask tests follow the locked order. A second lesson collision is an honest error. Both specimen numbers are banned. |
| **v1.2** | **9 October 2026** | Tychique Lesambo / engineering | Locks the remaining build choices: libraries, the session cookie, file extraction, credential encryption, the phone-code hash, GitHub Actions, the App Runner image, and an unlisted Chrome extension. |
| **v1.1** | **9 October 2026** | Tychique Lesambo / engineering | Rewrites the build as test-driven from the toolchain through production. Each task writes a failing test before production code. Adds the plan-change test, the read-only Account phone, the design-system states, the Check sequence for an easier success, and the deploy to the live host. |
| **v1.0** | **9 October 2026** | Tychique Lesambo / engineering | First implementation-task document. Ordered the modules. Done-when checks came after the code. |

**What this document does:**

- Orders every task from the empty repo to a live MVP a learner can open.
- Requires a failing test before the production code for that behavior.
- Covers the frontend, the server, the database, the mastery engine, the model boundary, and the deploy.

**What this document does not do:**

- It does not add a product rule. Requirements win on behavior. The structural design wins on how a locked rule is built.
- It does not authorise staff shells, a course catalog, Stripe, a hint, open-writing scores, a sold check, export, or account deletion.
- It does not mark work complete. Nothing in this file has been built.
- It does not choose a public host, a helpline number, or an export implementation. Open item 2 and Open item 4 stay open.

---

## 0. How every task is done

A task is not started by writing the feature. It is started by writing the test named in that task.

1. Write the test. Run it. It fails because the behavior is absent.
2. Write only the production code that makes that test pass.
3. Run the test again. It passes. Do not add the assertion after the code already exists.
4. The production code for that test lives in the package structural design §3 names. It does not add a second copy of the classifier, the key matcher, or the mastery update.

Unit tests use Vitest. Screen tests use Testing Library. Journeys use Playwright. Database tests run against the local Supabase Postgres. A test that needs the model, Polar, or SMS uses a fake of `LlmProvider`, `BillingProvider`, or `SmsProvider`. The fake is not a second product.

Each package writes only the tables §3 gives it. `practice` calls `mastery`. `learn` calls `llm` only for the four tasks in §6.2. A screen calls neither Anthropic nor the update function. `mastery` does not import `llm`. A task that needs a new process, a second database, or a queue stops and stays on the year-one runtime: Postgres holds the graph, ElastiCache holds only the entitlement snapshot and the sign-out revocation, and App Runner runs one service. Unique keys named in §7 are the indexes for those lookups.

Build in order. A later task starts only after the tasks it names are green.

Standing product rules, asserted in the tests that own them:

- School-age responses use `SchoolPayload`. Price, payment failure, and “number already used” are absent.
- A parent response has labels, next review, recent label lines, and edges. It has no problem, answer, score, `p_know`, ask text, page body, or still-reading state.
- Answer keys, easier keys, accepted equivalents, and `source_span` stay on the server.
- No screen imports the Anthropic SDK. `mastery` does not import `llm`.
- Requirement 40 is not a task.

### Locked build choices

These are the year-one tools. A task does not swap one for another.

| Choice | Lock |
|---|---|
| App | `escolent/`, Next.js 16 App Router, React 19, Tailwind 4, TypeScript strict, npm |
| Fonts | `next/font/google`: Outfit for school-age, Plus Jakarta Sans for the calm face |
| Unit and screen tests | Vitest. Server tests use the `node` environment. Screen tests use `jsdom` and Testing Library |
| Journeys | Playwright, Chromium only, viewports 320 and 760. `npm run test:e2e` is the local project. It does not run `e2e/production.spec.ts` or `e2e/value-proof.spec.ts` |
| Database tests | Supabase CLI, local Postgres |
| Supabase in the app | `@supabase/supabase-js` and `@supabase/ssr` |
| Phone numbers | `libphonenumber-js`. No default country. An unparseable number stays on the phone step |
| Phone code | SHA-256 of the code plus `PHONE_CODE_PEPPER`. Plaintext is not stored |
| Session cookie | Name `escolent_session`. HttpOnly. SameSite Lax. Path `/`. Secure when `PUBLIC_BASE_URL` is `https` |
| Files | `unpdf` for PDF, `mammoth` for DOCX, UTF-8 for plain text. No OCR package. S3 key `files/{person_id}/{object_id}` |
| Read token | Node `crypto` AES-256-GCM. Key is `CREDENTIAL_KEY`. The IV is stored with the ciphertext |
| AWS clients | `@aws-sdk/client-s3` and `@aws-sdk/client-sns`. Region is `us-east-1` |
| Cache | `ioredis` to ElastiCache. Key prefixes `escolent:entitlement:` and `escolent:session-revoked:` only |
| Model | `@anthropic-ai/sdk` imported only from `escolent/llm`. Model id is `ANTHROPIC_MODEL` |
| Biller | `@polar-sh/sdk` behind `BillingProvider` |
| Image | `output: 'standalone'` and `escolent/Dockerfile` |
| CI | GitHub Actions `.github/workflows/ci.yml`. `npm ci`, then `npm test`, then `npm run test:e2e`. Deploy runs only on `main` after those jobs are green. `npm run test:e2e:live` runs after that deploy, and only when `PUBLIC_BASE_URL` is set |
| Extension | Chrome Web Store, unlisted. Learners install from the link. The host is `PUBLIC_BASE_URL` |
| Brightspace | `BRIGHTSPACE_LP_VERSION` defaults to `1.46` |

`PUBLIC_BASE_URL` is the only public host. The document does not name a domain.

---

## Task 1. Toolchain, libraries, and the empty app

**Builds:** structural design §1 and §2.  
**Traces:** NFR-DESIGN-01, NFR-DESIGN-02.  
**Depends on:** nothing.

**Tests first.** `escolent/toolchain.test.ts`

- `node -v` is major 20.
- `package.json` depends on `next` 16, `react` 19, and `tailwindcss` 4, matching `escolent-student-demo`.
- Dev dependencies include `vitest`, `@playwright/test`, `@testing-library/react`, and `jsdom`.
- Dependencies include `@supabase/supabase-js`, `@supabase/ssr`, and `libphonenumber-js`.
- `@anthropic-ai/sdk` is not imported outside `escolent/llm`.
- `package.json` has no `stripe` dependency and no Workbox or service-worker package.
- `npm test` runs Vitest. `npm run test:e2e` runs the local Playwright project. `npm run test:e2e:live` is a separate script. The local project fails if it includes `e2e/production.spec.ts` or `e2e/value-proof.spec.ts`. The live script fails if it runs while `PUBLIC_BASE_URL` is unset. Both local commands exist. The suite is empty-red until the first real test file is added in this same task: a health test that fetches `/health` and expects 200. That health test fails before the route exists.

**Then build.** Create `escolent/` as a new Next.js App Router app. Leave `escolent-student-demo` as the design system. TypeScript is strict. npm is the package manager. Server module folders exist, empty, with these names: `door`, `inhabit`, `skill-name`, `shell`, `today`, `learn`, `practice`, `progress`, `graph`, `entitlement`, `failure`, `mastery`, `llm`.

Add provider interfaces with no vendor body yet: `SmsProvider`, `LlmProvider`, `BillingProvider`, `ReadConnection`. `.env.example` names `PUBLIC_BASE_URL`, the Supabase URL and keys, `HELPLINE_NUMBER`, `POLAR_WEBHOOK_SECRET`, `PHONE_CODE_PEPPER`, `CREDENTIAL_KEY`, `ANTHROPIC_MODEL`, the S3 bucket, the SNS sender, and the ElastiCache endpoint. `AWS_REGION=us-east-1` and `BILLING_PROVIDER=polar` are set in that file. Values that are secrets stay empty.

Install the Supabase CLI for local Postgres. Do not install Upstash. The design-system demo’s Upstash packages are not part of this app. ElastiCache arrives in Task 17.

**Green when:** the toolchain test and the `/health` test pass, and a search finds no Stripe package and no service worker.

---

## Task 2. Database and access

**Builds:** structural design §7 and §8.  
**Traces:** NFR-SEC-01, NFR-SEC-02, NFR-DATA-01, NFR-DATA-02, NFR-DATA-03, Requirements 25, 26, 40.  
**Depends on:** Task 1.

**Tests first.** `escolent/db/schema.test.ts` and `escolent/db/rls.test.ts`, against local Supabase.

- Every table and column in structural design §7 exists. Money columns are integers. `verification_note` exists.
- None of these exist: a course catalog, a staff table, grade passback, a verification order, a hint, an open-writing score, a network-address block list, a card table.
- There is no export route and no delete-account route in the app tree.
- The anon key cannot select `skill_row`, `practice_problem`, or `subscription`.
- A parent query for a problem id is refused.
- The school role cannot select `subscription`.
- A session for one learner, asking for another learner’s `skill_row`, `practice_problem`, or `attempt`, receives a refusal. The service role does not skip that person check. Unique keys named in §7 exist, including `(person_id, normalized_name)`, `phone_e164`, and `polar_event_id`.

**Then build.** The migration. Service-role access only after an Escolent session loads. Row-level policies deny the anon key.

**Green when:** those tests pass on local Postgres.

---

## Task 3. Session and the front door

**Builds:** structural design §2.1 and §4.1.  
**Traces:** Requirements 1, 2, 3. E1-01–E1-06, E1-12, E1-13, E1-18–E1-21. NFR-SEC-04, NFR-SEC-05.  
**Depends on:** Task 2.

**Tests first.** `escolent/door/door.test.ts` and `e2e/door.spec.ts`.

- The first screen offers four roles and no other field.
- An email without `@` stays on sign-in.
- Email continue sends a six-digit code and the next screen accepts that code. A different six-digit code stays on that step. The template fixture contains the token and no URL.
- Google skips the email code and returns to the door.
- No password input and no inbox route exist.
- School-age, after email code or Google, is on grant. The phone number and the phone code are absent.
- University, adult, and parent: an empty phone stays; an unparseable number stays; a non-six-digit code stays; a six-digit code that does not match the hash stays; the matching code continues. A code older than ten minutes is refused. The stored phone is E.164. The stored phone code is SHA-256 of the code plus `PHONE_CODE_PEPPER`. The plaintext is absent. Expiry is ten minutes.
- The session cookie name is `escolent_session`, HttpOnly, SameSite Lax, Path `/`. It is Secure when `PUBLIC_BASE_URL` is `https`.
- Parent, after the code: an empty child email stays. The parent’s own email, an email already on a phone, and a university or adult email are refused, not attached, and the child is not told. Skill name and Allow this read are absent. A new email is reserved. A later school-age sign-in sets `child_person_id` and does not insert a second trial. A later university or adult sign-in does not join, is not blocked, and deletes that reservation. An existing school-age account keeps its map. A second child can be attached from Account. Three children are allowed. A parent request does not draft a skill name.
- Account shows the confirmed phone and the input is disabled. The value is that payer’s number. The test fails if the value is `+1 555 0100`.
- A live session opens the shell and inserts no trial.
- Sign-out sets `ended_at`. A cleared cookie with `ended_at` null is still signed in.
- A school-age payload has no billing fields.

**Then build.** Supabase `verifyOtp` on the door. Google OAuth return onto the door. Escolent `session` row and httpOnly cookie. SNS behind `SmsProvider`.

**Green when:** the door tests pass.

---

## Task 4. Read doors, source class, and the extension

**Builds:** structural design §4.2, §6.1, §9.3, §9.4.  
**Traces:** Requirements 4, 5, 7, 8, 14, 29, 41. E1-07–E1-11, E1-14–E1-17, E2-01–E2-07. NFR-SEC-03.  
**Depends on:** Task 3.

**Tests first.** `escolent/inhabit/source-class.test.ts`, `escolent/inhabit/course-account-id.test.ts`, `extension/read.test.ts`.

- Allow this read is offered only for the page already open. The screen says permission is for this read, and that Escolent does not hold the password, does not sign in on a cloud computer, and does not click, submit, or press Next. A connection and a file skip it. Don’t allow writes no skill, no edge, and no trial, and does not offer Enter the shell.
- The connection list is Canvas, Classroom, Moodle, Blackboard, Brightspace. An empty choice drafts no name.
- Continue on the file door with no file stays there and says “Choose a file first.”
- No extracted text returns “Not enough to judge,” drafts no name, and writes no trial.
- A readable open page, connection item, or file stores that source’s text as `read_snapshot.body_text`. The stored text does not include another source. An adult read inserts no `schedule_item`. A school-age or university read inserts a `schedule_item` for reference work, with `graded_by_escolent` false. Practice does not draft from that row.
- The extension payload has no click, no submit, and no cookie jar. Server source does not import Playwright or Puppeteer to open the course site.
- Install id is reused from `chrome.storage.local`. A missing id does not produce “number already used.”
- Course-account ids, and no other field:

| Vendor | Stored field | Open-page global |
|---|---|---|
| Canvas | `id` from `GET /api/v1/users/self` | `ENV.current_user_id` |
| Classroom | `id` from `userProfiles.get` `me` | none, so the open page yields no id |
| Moodle | `userid` from `core_webservice_get_site_info` | `M.cfg.userid` |
| Blackboard | `uuid` from `GET /learn/api/public/v1/users/me` | none |
| Brightspace | `Identifier` from whoami | none |

- The stored value is `{host}/{field}`. The host is lowercased and has no path. `HTTPS://Canvas.Edu/courses/1` stores `canvas.edu/{field}`. A SIS id, an email, and a username are rejected as the field.
- Moodle’s fixture token is stored as `credential_ciphertext`. The Moodle password is not in the request body. The ciphertext is absent from the client response and from logs. An open-page link stores a null ciphertext. A connection that returned no token stores none and cannot be read again until the learner authorizes it. When the fixture says the learner cannot create the Moodle token alone, Moodle is not offered.
- Freshness has no clock. Advancing time without a new read leaves `fresh` as `fresh`.
- A missing id still allows a confirmed name and does not insert a trial.
- When the extension is absent, the open-page door does not read and does not draft a name. The grant screen still offers a read connection, a file, and “this page cannot be read.” The test is Chromium with the extension API absent. Playwright stays Chromium only.
- `source_class` follows structural design §6.1 and does not call the model. A submission, discussion, essay, or ungraded text with no quiz questions is `open_writing`. A page that is already a `schedule_item` is `open_writing`. A quiz or a question with a determinate answer is `exact`, and a vendor-included answer stays out of the learner prompt. For an open page or a file with no vendor type, the five words essay, report, notes, draft, and discussion are case-folded whole tokens, and they classify `open_writing` only when the text has no question line and no numbered exercise. A question line ends in `?` or is marked question, problem, or exercise. Every other open page or file is `exact`, including a teaching page with no question mark.
- Freshness follows structural design §4.2. An in-flight read is `syncing`. A finished read that writes the shown body and due day is `fresh`. A later read whose body or due day differs marks the shown row `stale` until the replacement write, which sets `fresh`. A failed re-read does not write `fresh`. If the stored word was `fresh`, that failed re-read shows `stale`. This word is not the review phrase “gone stale.”

**Then build.** Manifest V3 extension. Five read adapters. Brightspace uses lp version `1.46` unless `BRIGHTSPACE_LP_VERSION` is set. Private S3 upload under `files/{person_id}/{object_id}`. PDF through `unpdf`, DOCX through `mammoth`, plain text as UTF-8. `credential_ciphertext` is AES-256-GCM. No grade write-back. No OCR package.

**Green when:** those tests pass.

---

## Task 5. Skill name, rows, and edges

**Builds:** structural design §3.1 and §7.3.  
**Traces:** Requirements 6, 25, 26, 27. E3-01–E3-08, E9-01–E9-10.  
**Depends on:** Task 4.

**Tests first.** `escolent/skill-name/confirm.test.ts` and `escolent/graph/edge.test.ts`.

- An empty confirm writes no row and Enter the shell is absent. Confirm success says “A later page with the same name reuses the row” and only then offers Enter the shell.
- Editing the name after confirm hides Enter the shell until confirm again.
- `draft_skill_name` output cannot set `label` or `abstain`.
- Normalization: `"  Two   Step "` and `"two step"` reuse one row. `p_know` does not reset.
- `open_writing` confirm sets `abstain`, shows “Not enough to judge,” and inserts no edge and no problem. `p_know` stays 0.10. Confirm inserts `skill_source` with that door and its label: the file name, the connection name, or “page already open.”
- An edge is stored only when one granted source states the order, and the stored direction copies that source. A numbered list counts. A before/after sentence in that source counts. A connection’s item order counts only when that connection returned an order. A set with no order, confirmation time, calendar order, a model suggestion, an abstaining page, and an unreadable page store no edge.
- There is no `/graph` route. Progress says “These rows belong to the learner. A course site does not keep them.” The later-check line says “A later check can sit on this row. It is not offered this year.” `verification_note` is null and the line has no price.

**Then build.** Confirm, name reuse, and the edge insert.

**Green when:** those tests pass.

---

## Task 6. Mastery engine

**Builds:** structural design §5.  
**Traces:** Requirements 19, 22, 24, 39. E7-05, E7-08, E8-02, E8-03, E8-06. NFR-AI-01, NFR-AI-05.  
**Depends on:** Task 2.

**Tests first.** `escolent/mastery/update.test.ts`. This file is the whole specification of the function. Write it before `update.ts`.

Constants are prior 0.10, transit 0.10, slip 0.10, guess 0.20.

| Fixture | Expect |
|---|---|
| Original success from 0.10 | `p_know` 0.40000, label emerging, not durable |
| Original failure from 0.10 | `p_know` 0.11233, label struggling, both tentative dates null |
| Easier failure from the stored 0.11233 | the failure formula in §5.2 runs, `p_know` 0.11401 |
| No updating attempt | label not attempted, `p_know` stays 0.10 |
| Easier success when no updating attempt exists | `p_know` stays 0.10000. This test calls `mastery` directly. It is not a Check request |
| Easier success after the 0.11233 failure | attempt stored, `p_know` stays 0.11233 |
| Empty Check | no attempt row |
| Same local date, estimate at or above 0.85 | tentative |
| Second local date, estimate still at or above 0.85 | durable |
| Later estimate below 0.85 | label leaves durable, both dates remain |
| Estimate returns to 0.85 or above, both dates already set | label is durable again |
| Missing IANA timezone | attempt rejected |
| Timezone present | `attempt.timezone` stores that IANA name, and `local_date` is computed once. A later request does not recompute it |
| Response time present | label unchanged if the outcome is unchanged |
| Miss, or estimate below 0.85 | `next_review_on` is that local date, `review_gap_days` is 1 |
| First day at or above 0.85 | next review is the next calendar day, gap stays 1 |
| Durable success with gap 1, then 3, then 7, then 16 | gap becomes 3, then 7, then 16, then stays 16 |
| Gap is 16, then a miss, then a later durable success | the miss sets the gap to 1, and that later durable success sets the gap to 3 |
| `mastery` source | does not import `llm`. A search fails if another package assigns `p_know`, `label`, `first_tentative_on`, `second_tentative_on`, `next_review_on`, or `review_gap_days` |

**Then build.** The pure function and the writers named in §5. Five decimal places.

**Green when:** `update.test.ts` passes. Do not route these cases through Check in this task.

---

## Task 7. Model boundary

**Builds:** structural design §6 and §4.4.  
**Traces:** Requirements 15, 16, 18, 20. E6-01–E6-09, E7-03. NFR-AI-02, NFR-AI-03, NFR-AI-04.  
**Depends on:** Tasks 5 and 6.

**Tests first.** `escolent/learn/classify.test.ts` and `escolent/llm/accept.test.ts`. The model is a fake that records whether it was called.

- The classifier is the order in structural design §4.4. First match wins. It does not copy the design-system catalog, which checks a due phrase before a refusal. Empty, refusal, due, and off-topic do not call the fake. Explain does.
- Empty returns “Ask about this skill, or what is due.”
- A whole word `answer`, `solve`, or `solution`, or the current practice prompt, is a refusal even when the same text also contains `explain`, `how do`, `what is`, `due`, or `when is`. The reply is “That answer stays yours. Say what you already tried, and the ask can help from there.” The key is absent.
- A whole word `due` or `deadline`, or the words `when is`, is due when no refusal matched. “what is this skill”, “what is the skill”, “how do”, “this skill”, and “explain” are explain when no earlier class matched.
- Anything else returns “This ask covers what the skill is, and what is due.” Specimen phrases such as “what does temp” are not required to match.
- Key `5` matches `step 5` and does not match `15`.
- A problem is stored only when every acceptance line in structural design §6.3 holds: the echoed snapshot id matches, `source_span` is a verbatim substring at least 20 characters or the whole body when the body is shorter and is not itself only the key, both prompts are non-empty and different and belong to this skill, neither prompt equals a stored worked example, neither prompt nor the miss note matches a key, the miss note is non-empty, and `check_kind` is `exact`. Any miss discards the draft. A second discarded draft leaves `abstain` false, leaves the label unchanged, names the skill, shows no problem and no Check, and does not say “Not enough to judge” or the ended-trial sentence. A later Practice open may call `draft_problem` again.
- `draft_skill_name` receives the stored `body_text` of that read and does not receive a specimen course, a label, or an answer key.
- `draft_problem` is not called for `open_writing`, for closed practice, while a read is in flight, or while an unused problem for that skill already exists.
- A lesson that repeats the practice prompt or the easier prompt is discarded and requested once more. A second collision shows the skill name, does not show the lesson or the worked example, does not use “This ask did not go through. The answer stays yours.”, does not use “Not enough to judge.”, does not use the ended-trial sentence, and does not reveal the key. This document does not invent a further sentence for that error.
- An explanation that contains the key returns “This ask did not go through. The answer stays yours.” and writes no label. A timeout uses that same template and writes no label. None of the four task results sets `label`, `abstain`, `entitlement`, or `source_class`. A logged retry contains no answer key.

**Then build.** `LlmProvider` with `@anthropic-ai/sdk` inside `escolent/llm` only. The model id is `ANTHROPIC_MODEL`. The four tasks only: `draft_skill_name`, `draft_lesson`, `draft_problem`, `explain_skill`. Timeouts use the failed-ask template. Logs do not contain keys.

**Green when:** the fake-model tests pass with no network call.

---

## Task 8. Shell, faces, and the device snapshot

**Builds:** structural design §2.3 and module E4.  
**Traces:** Requirements 7, 9, 10, 36. E4-01–E4-09, E2-01, E2-02, E11-04. NFR-DESIGN-03, NFR-DESIGN-04, NFR-DESIGN-05, NFR-PERF-02, NFR-REL-01 for the shell.  
**Depends on:** Task 3.

**Tests first.** `escolent/shell/places.test.tsx` and `e2e/shell.spec.ts`.

- School-age places are Today, Learn, Practice, Progress. University and adult add Account. Parent places are Progress and Account, and the first paint is Progress.
- School-age font is Outfit. Calm font is Plus Jakarta Sans. Place colors match the design system.
- Below 760 pixels there is no horizontal page scroll, and the places sit in the bottom bar with every label readable, including Account. At 760 pixels and above, the places are in the top bar. The test includes a width below 760 that is not 320.
- Tabbing to a place, a door choice, or Check shows a visible focus ring.
- Helpline is under the read line and on the door, and it is not a place. Unset `HELPLINE_NUMBER` says the line is not published yet. A set value shows that number and “A person can be reached here. There is no promise of a reply.” It shows no price. The bundle test fails if `+1 555 0199` or `+1 555 0100` appears.
- The learner read line names the door. The parent line says the parent does not read the child’s page.
- IndexedDB `escolent-shell` / `snapshot`, keyed by `person_id`, paints places and the read line before a delayed refresh resolves. A failed shell response does not write the snapshot. It may keep the role, the place list, the read line, the helpline text, skill display names, labels, next review, freshness words, and reference titles and due days. It has no answer key, prompt, easier prompt, miss note, source span, page body, token, phone code, or another learner’s rows. A school-age snapshot has no billing fields. A parent snapshot is labels only. There is no service-worker cache of API responses. Sign-out deletes that person’s snapshot.
- School-age shell text has no price, no “payment failed,” and no “number already used.”

**Then build.** The shell from the design-system tokens. No second visual language. No service worker.

**Green when:** the shell tests pass at 320 and 760.

---

## Task 9. Today

**Builds:** module E5 and freshness in §4.2.  
**Traces:** Requirements 11, 12, 13, 14. E5-01–E5-07. NFR-REL-01 for Today.  
**Depends on:** Tasks 4 and 8.

**Tests first.** `escolent/today/today.test.tsx`.

- School-age and university render Today selected, with a Week control. Week groups rows under their days. Each university row is tagged with that student’s course. A school-age essay is not shown as a university row.
- The Escolent row names the confirmed skill and offers practice when practice is open.
- Adult Today has no Week control and no due date. The first row is the last miss. The next row is a tentative skill that has gone stale and says “This skill has gone stale. There is no due date.”
- A reference row is dashed, says Escolent does not grade it, and has no Check.
- Waiting practice says practice waits and the map stays. Reference due days remain for school-age and university.
- Today contains no price.
- Fresh, stale, and syncing are words. The test reads the text, not a color alone.
- Empty Today, with no confirmed skill, shows no invented row.

**Then build.** The Today and Week control.

**Green when:** those tests pass.

---

## Task 10. Learn and ask

**Builds:** §4.4, `draft_lesson`, `explain_skill`.  
**Traces:** Requirements 15, 16, 38. E6-01–E6-10. NFR-REL-01 for Learn.  
**Depends on:** Tasks 7 and 8.

**Tests first.** `escolent/learn/learn.test.ts`.

- The lesson names the skill, the label, and the source door.
- The worked example is not the stored practice prompt and not the easier prompt.
- An adult lesson contains no due date.
- The practice action is absent while practice is closed.
- Empty ask returns “Ask about this skill, or what is due.”
- Due names the `schedule_item` days for school-age and university, and “there is no due date” for an adult. An adult ask does not invent a `schedule_item`. Each ask inserts `ask_turn` with its class and the shown reply. The stored reply is not an answer key.
- Refusal does not contain the answer key.
- In flight, the screen text is “Thinking.” The thinking fixture contains no answer and writes no label.
- An ask that matches none of the four earlier classes returns “This ask covers what the skill is, and what is due.” and does not call the model.
- A second lesson collision on this screen shows the skill name and hides the lesson. It does not use the failed-ask sentence and does not reveal the key.
- A parent render has no ask and no still-reading line.

**Then build.** The Learn screen and the ask box.

**Green when:** those tests pass against the Task 7 fakes.

---

## Task 11. Practice and Check

**Builds:** §4.3 and §3.1.  
**Traces:** Requirements 17, 18, 19, 20, 21. E7-01–E7-09. NFR-PERF-01, NFR-REL-02.  
**Depends on:** Tasks 6, 7, and 8.

**Tests first.** `escolent/practice/check.test.ts`.

- Open practice shows one prompt and one Check. No hint control.
- Empty original and empty easier both return “Enter an answer.” and insert no attempt.
- Original wrong stores an attempt, calls the failure update, returns the miss note and the easier prompt, and does not return either key. The attempt stores `outcome` as `right` or `wrong`, `step` as `original` or `easier`, and `response_time_ms`. The label does not read `response_time_ms`.
- Easier wrong returns “Not this time. The step is still theirs.”, stores the attempt, and calls the failure update. It does not show the miss note again.
- Easier right, after that original wrong, stores the easier attempt, leaves `p_know` at the post-failure value, and leaves the original open. This test does not expect 0.10000.
- Original right returns “Durable waits for another day” when the skill is not yet durable, and does not say that once it is durable.
- Check is exact after trim, collapsed whitespace, and case-fold. The whole field equals the answer key or an accepted equivalent. “Step 5” is wrong when the key is `5`. The token rule that treats `step 5` as a leak stays in Task 7. It is not the grader. The same rule applies to the easier key.
- Abstain returns no answer field and the words “Not enough to judge.”
- Closed practice, a used-number entitlement, and a parent request omit the problem. The parent request is a refusal.
- A confirmed skill with no trial row omits the problem. A payer sees “This read did not start the seven days. The map can show this skill. Practice stays closed.” That screen does not say “The trial has ended”, “payment failed”, or “number already used.” A school-age payload does not include “seven days”, a price, “payment failed”, or “number already used”, and it does not say the trial has ended. Requirement 21’s sentence, “The map stays and practice waits,” stays reserved for an ended unpaid trial or a failed payment.
- The Check handler test fails if the Anthropic client was constructed.
- A deterministic Check fixture finishes in the test under 300ms of handler time, with the model fake unused.

The Practice place uses the last confirmed skill. Today and Progress pass a skill id.

**Then build.** The Check handler and the Practice screen, including its empty and error states.

**Green when:** `check.test.ts` passes.

---

## Task 12. Progress and the parent map

**Builds:** modules E8 and E9.  
**Traces:** Requirements 22, 23, 24, 25, 26, 27. E8-01–E8-07, E9-06–E9-10. NFR-REL-01 for Progress.  
**Depends on:** Tasks 5, 6, 8, and 11.

**Tests first.** `escolent/progress/map.test.ts`.

- A judged skill shows one of the five labels. An abstaining skill shows “Not enough to judge.”
- The chain renders inside Progress. A request to `/graph` is not a place.
- Copy says “These rows belong to the learner. A course site does not keep them.” It also says that code moves a label.
- The later-check line says “A later check can sit on this row. It is not offered this year.” and has no price.
- A durable skill says the check keeps it from going stale.
- An adult stale skill says the next review is now and there is no due date.
- Practice-next is present when practice is open and the role is not parent. It is absent for a parent and while practice waits.
- The parent switcher loads each attached child. A child with no skill shows an empty map and no invented row.
- Parent recent lines are labels only. A learner recent line may say a miss.

**Then build.** The Progress body and the child switcher.

**Green when:** those tests pass.

---

## Task 13. Trial, Polar, plan change, and the sweeper

**Builds:** §4.5 and §9.5.  
**Traces:** Requirements 28, 29, 30, 31, 32, 33. E10-01–E10-16. NFR-DATA-03.  
**Depends on:** Tasks 3, 4, and 8.

**Tests first.** `escolent/entitlement/trial.test.ts`, `escolent/entitlement/webhook.test.ts`, and `escolent/entitlement/account.test.tsx`. Polar is a fake.

- No trial row exists until the phone is confirmed, a real read succeeded, and that door’s keys exist. School-age also needs the child email attached. `ends_at` is `started_at` plus seven days.
- A file trial has null `course_account_link_id` and null `extension_install_id`.
- The same phone and a new email do not insert a second trial. An existing extension install does not insert a second open-page trial. An existing course-account link does not insert a second connection trial.
- A shared network value is not read by the start function.
- A missing course-account id does not insert a trial.
- Checkout amounts are 1600 and 14400, currency USD. Another amount or currency does not change entitlement.
- The webhook test applies a signed success and a signed failure. An unsigned body changes nothing. A duplicate event id applies once.
- Success on day three sets `paid`, sets `subscription_id`, and leaves `ends_at` unchanged. The sweeper clock after day seven leaves practice open.
- When `ends_at` is past, entitlement is `trial`, and `subscription_id` is null, the sweeper sets `free`, closes practice, and leaves skill rows in place.
- Failure sets `past_due` and closes practice. The school-age payload still has no failure words.
- A used-number message leaves practice open. The sweeper performs no write because that message was shown. Account shows “This number already started a trial” and the sentences “not a new seven days”, “Every child attached to this phone shares that trial”, and “Paying does not start a new seven days.” A school-age payload does not contain them.
- Cancel confirm sets subscription `canceling`, leaves entitlement `paid`, and leaves practice open before `period_end`. The sweeper at `period_end` sets `free` and leaves skill rows in place. A test fails if `entitlement.status` is written as `canceling`.
- Changing month to year sets `pending_plan` and leaves practice open. The current plan remains until `period_end`. A signed renewal at `period_end` sets `plan` to `pending_plan` and clears `pending_plan`. Practice stays open while the subscription is `active`. The sweeper does not apply `pending_plan` before that renewal.
- No route marks the account paid from a client button. Account has no control labeled “Payment went through” or “The payment did not go through.”
- The card number is not a column. Account has no card field. The pay handoff says the card is entered with the biller and that Escolent does not see the card.
- Account shows “$16 a month” and “$144 a year”. A school-age session has no Account place and no price.
- Cancel asks the payer to confirm and offers “Keep it”. Choosing “Keep it” leaves the subscription unchanged. Confirming shows “Access lasts until this period ends. The map stays. Practice stays open until then.”

**Then build.** `@polar-sh/sdk` behind `BillingProvider`. The Account body from the design system, without the catalog buttons that mark a payment as gone through. The hourly sweeper function. EventBridge is wired in Task 17. This task tests the function with a clock.

**Green when:** the entitlement tests pass on the fake Polar client.

---

## Task 14. Still reading, offline, and sign-out

**Builds:** §4.6 and module E11.  
**Traces:** Requirements 34, 35, 37, 38. E11-01, E11-02, E11-03, E11-05–E11-07. NFR-SEC-04, NFR-REL-03.  
**Depends on:** Tasks 8, 11, and 13.

**Tests first.** `escolent/failure/read-state.test.ts`.

- An in-flight read shows “Still reading the page already open” and “No skill name yet. Nothing is added to the graph.” It inserts no `skill_row`.
- A failed read shows “This page cannot be read right now” and “The map stays. Practice waits. Nothing is added to the graph.” It sends no problem, adds no edge, does not write `fresh`, and does not change `entitlement.status`.
- The parent response for both states says “The map stays” and “The parent does not read the child’s page.” It includes no problem, no still-reading line, and no ask.
- Sign-out sets `ended_at`, clears the Supabase session, deletes that person’s IndexedDB snapshot, leaves skill rows, leaves entitlement, and inserts no trial. It does not reset billing to Running and does not mark the account paid. The next request with the old cookie is the door.
- School-age text in these states has no price.

**Then build.** The two shell sequences and sign-out.

**Green when:** those tests pass.

---

## Task 15. Screen states from the design system

**Builds:** NFR-REL-01 across the shell.  
**Traces:** NFR-REL-01, NFR-DESIGN-01.  
**Depends on:** Tasks 8, 9, 10, 11, 12, 13, and 14.

**Tests first.** `e2e/states.spec.ts`. One case per row. Each case fails if the text is missing.

| Screen | Empty | Waiting | Error | Ready |
|---|---|---|---|---|
| Door email | Stay, no continue into a code | — | Email without `@` stays | Six-digit code continues |
| Door phone | “Enter the phone number.” | — | A short code stays | Six-digit code continues |
| Child email | “Enter the child’s sign-in email.” | — | A refused email is not attached | Map opens |
| Grant | No file stays on the file step | Still reading, no skill name | “Not enough to judge” | Confirm offers Enter the shell |
| Today | No invented skill | Syncing word | Failed read is not fresh | Today selected, practice action when open |
| Learn | “Ask about this skill, or what is due.” | “Thinking.” | “This ask did not go through. The answer stays yours.” | Lesson and a different worked example |
| Practice | “Enter an answer.” on original and easier | — | Easier wrong: “Not this time. The step is still theirs.” | One problem and Check |
| Progress | Attached child with no skill: no row | — | Parent problem URL is refused | Labels and the chain |
| Helpline | Unset: the line is not published yet | — | — | The configured number, then “A person can be reached here. There is no promise of a reply.” No price |
| Account | School-age has no Account place | “The trial has ended”: the map stays and practice waits | “The payment failed”: the map stays and practice waits | “$16 a month” and “$144 a year”. Pay says the card stays with the biller. Cancel offers “Keep it”, then “Access lasts until this period ends. The map stays. Practice stays open until then.” |
| Used number | — | — | — | “This number already started a trial”, “not a new seven days”, children share that trial, and paying does not start a new seven days. Absent from a school-age payload |
| Offline | — | — | “This page cannot be read right now.” The map stays. Practice waits. Nothing is added to the graph. No problem | — |

**Then build.** Only the states this file still fails. Do not restyle a state that already passed in Tasks 8–14.

**Green when:** `states.spec.ts` passes at 320 and 760 pixels.

---

## Task 16. Local release suite

**Builds:** requirements §17.1 on the local app.  
**Traces:** the Must stories, on the role each story names.  
**Depends on:** Tasks 1 through 15.

**Tests first.** `e2e/release.spec.ts`. Write these fourteen before treating the local app as finished. They use the fakes from earlier tasks, not live Polar and not live Anthropic.

1. School-age, parent attached, open page, Allow, Confirm, original miss, easier problem. The payload has no price.
2. The same phone and a new email do not start a second trial.
3. A file trial binds the phone only.
4. A signed Polar success during the seven days leaves `ends_at` and leaves practice open.
5. Cancel leaves practice open until the period end.
6. A parent sees two children’s labels and cannot fetch a problem.
7. One original success from a new skill is emerging at 0.40000.
8. An essay shows “Not enough to judge” and has no Check.
9. An ask for the unsolved answer does not contain it.
10. Sign-out returns to the door, and the next sign-in still has the map.
11. An open page with no course-account id confirms the name, writes no trial, and shows no problem. The payer sees “This read did not start the seven days. The map can show this skill. Practice stays closed.” The school-age payload does not.
12. With the extension API absent, the open page drafts no name, and the file door can still confirm one.
13. A connection that returns its user field binds the phone and that course-account id, and does not bind an extension.
14. Canvas and Moodle fixtures that include the §9.3 field produce an id. Classroom, Blackboard, and Brightspace open-page fixtures, which have no global, produce none.

**Then build.** Nothing new unless a case fails. Fix the owning task, do not patch around it in this file.

**Green when:** `npm test` and `npm run test:e2e` are green on a clean local Supabase.

---

## Task 17. Deploy the host

**Builds:** structural design §2 on the live host.  
**Traces:** the same stories as Task 16, against the live host. NFR-PERF-02 on the live shell. Public learners wait for Task 18.  
**Depends on:** Task 16.

**Tests first.** `e2e/production.spec.ts` is in the live project, not the local one. It reads `PUBLIC_BASE_URL` and fails while that variable is unset. `escolent/deploy.test.ts` fails until `escolent/Dockerfile` exists, Next is configured with `output: 'standalone'`, and `.github/workflows/ci.yml` runs `npm ci`, `npm test`, and `npm run test:e2e` before a deploy job that runs only on `main`. That same test fails if the pre-deploy job runs `test:e2e:live`. `escolent/entitlement/cache.test.ts` fails if a key does not start with `escolent:entitlement:` or `escolent:session-revoked:`. It also fails if a skill row, a problem, a prompt, an answer key, a miss note, or a page body is written under either prefix. The only stored values are the entitlement snapshot and the sign-out revocation.

**Then build the live path.**

- A non-production Supabase project and a production Supabase project. Migrations from Task 2 apply to both. The email template uses the six-digit token and no confirmation URL. Google’s return URL is the door on that host.
- Private S3 bucket for the file door.
- SNS for `SmsProvider`.
- ElastiCache is reached with `ioredis`. It holds the entitlement snapshot and the sign-out revocation only. A cache miss reads Postgres.
- App Runner runs the standalone image from `escolent/Dockerfile`, in `us-east-1`. CloudFront is the HTTPS front and its origin is that service. ECS is not created.
- EventBridge invokes the Task 13 sweeper at least once an hour.
- Polar live webhook points at `PUBLIC_BASE_URL`. Test-mode Polar points at the non-production host. `BILLING_PROVIDER=polar`.
- `HELPLINE_NUMBER` is set in the server environment, or it is left unset and the shipped control says the line is not published yet. The specimen numbers `+1 555 0199` and `+1 555 0100` are not in the build.
- The Chrome extension is published unlisted. Learners install it from that link. Its host is `PUBLIC_BASE_URL`.
- Secrets live in the host environment, not in the repository.

**Green when:**

- CI is green and the deploy job has run.
- `production.spec.ts` passes against the live host for the fourteen Task 16 stories, using production test people rather than the design-system catalog.
- A learner can open the public URL, sign in, and reach the shell. A parent can open the map. The open-page door works after the extension is installed.
- This green state is the host. It does not open the product to public learners. Task 18 is still required.

---

## Task 18. Proof before any public learner

**Builds:** requirements §17.1 gate 9, on the live host, for the value proposition in §1.1.  
**Traces:** Requirements 4, 28, and 36. Open items 1 and 2.  
**Depends on:** Task 17.

**Tests first.** `e2e/value-proof.spec.ts` is part of `npm run test:e2e:live`, not `npm run test:e2e`. It fails until the fourteen Task 16 stories have passed on `PUBLIC_BASE_URL`. The rest of this task is a record Tychique writes. A passing Playwright file does not check those lines, and the local CI job must not run this file.

**Then record, in this order.**

- `PUBLIC_BASE_URL` is `https` on a host Tychique has chosen. This document does not name that host.
- `HELPLINE_NUMBER` is a number Tychique operates, or Tychique records that this launch keeps the control and the words “the line is not published yet.” This document does not choose the number. The specimen numbers stay out of the build.
- One page the learner already has is read on the live host through a door that can produce its keys: a Canvas or Moodle open page with the extension, a connection that returns its §9.3 field, or a file. The skill name is confirmed from that page. An essay on that path shows “Not enough to judge” and has no Check.
- Classroom, Blackboard, and Brightspace are proved on the live host only as open pages that yield no course-account id, unless a connection returns the field. The payer sees that the read did not start the seven days. Practice shows no problem. The map can show the skill.
- Tychique walks the shell on the live host as a school-age learner, a university student, an adult, and a parent. The school-age walk has no price. The parent walk has no problem. The file door and a connection door are walked in a browser that is not Chrome. The open-page door is walked in Chrome after the unlisted extension is installed.
- Open item 2 is decided by counsel. If export and deletion stay Should, Tychique records that this launch may proceed without them. If counsel requires them before a public launch, the launch waits and a new task is written after that decision. This document does not add that task, and it does not add an export route.

**Green when:** the fourteen stories pass on the live host, and each record line above is written by Tychique. Until then the product is not open to public learners.

---

## Trace

| Requirements | Task |
|---|---|
| Toolchain, health, libraries | 1 |
| Schema, access, 25, 26, 40 left out | 2 |
| 1, 2, 3 | 3 |
| 4, 5, 7, 8, 14, 41 | 4 |
| 6, 25, 26, 27 | 5 |
| 19, 22, 24, 39 | 6 |
| 15, 16, model half of 18 and 20 | 7 |
| 9, 10, 36 | 8 |
| 11, 12, 13, 14 | 9 |
| 15, 16, 38 | 10 |
| 17, 18, 19, 20, 21 | 11 |
| 22, 23, 24 and the Progress half of 25–27 | 12 |
| 28, 29, 30, 31, 32, 33 | 13 |
| 34, 35, 37 | 14 |
| Design-system states | 15 |
| Local release walks | 16 |
| Live host | 17 |
| Public learners, after the live proof | 18 |
| 40 | No task, until counsel decides Open item 2 |

---

## End of this document

This is the implementation-task document for the Escolent learner MVP as of 9 October 2026. Product behavior remains `docs/PRODUCT-REQUIREMENTS.md`. How that behavior is built remains `docs/STRUCTURAL-DESIGN.md`.
