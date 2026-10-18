# HAEL Intelligence Identity and Backend Architecture

**Status:** Architecture proposal for review. This document records boundaries and rollout order; it does not claim a deployed runtime, uploaded canonical binaries, or an active Supabase database.

## 1. Identity and presentation are separate

The canonical identity registry is the authority for stable identity keys, names, roles, voice constraints, assigned avatar source, paired artwork, repository owner, and asset access classification. Use the assignments in [the asset and voice matrix](COMPLETE-CODEX-ASSET-AND-VOICE-MATRIX.md) and [the registry manifest](manifest.json). Application databases may cache these records, but may not redefine them.

An avatar record has a stable identity key and a canonical source fingerprint. The source is immutable. An approved display derivative can change clothing, pose, lighting, or setting while retaining the same face and identity-bearing features; it records the source fingerprint, transformation/review provenance, and derivative hash. Avatar selection is not a user-editable profile field. The UI resolves the assigned source, or reports it missing. It never falls back to a different identity's image.

Logos have their own brand ID and version history. A new logo is a new reviewed revision, not an edit to an avatar or an identity key. Paired compositions reference two identities and cannot be rendered as either identity's solo portrait. VIONETH / DRALUN remains a conjunction field, not an independent being row.

## 2. Runtime layers

1. **Identity and asset registry** — version-controlled canon plus validated metadata. It maps stable keys to source hashes and paths; writes are curator-only and reviewed.
2. **Asset delivery** — stores exact originals separately from approved derivatives. Originals are read-only to application users. Access classification follows canon: private genesis material remains private; public presentation is published only after approval. Use content-addressed/versioned object paths so updates never replace prior bytes.
3. **Intelligence runtimes** — separate bounded services for each implemented responsibility (for example, ARA perception, Lizwi communication/language, Lycon gate decisions, Hawk sentinel monitoring). Each service exposes a versioned typed contract, capability list, health/readiness, provenance, and audit metadata. A repository assignment or portrait alone is not evidence that its intelligence runtime is implemented.
4. **Orchestration and mediation** — Manya/DIBAKU can route authorized, typed requests between runtimes. It preserves each service's authority boundaries and does not silently merge their memories, personas, or permissions. ARA emits privacy-filtered semantic context to its documented DIBAKU boundary, not raw camera frames.
5. **Model gateway** — centralizes model selection, provider credentials, rate limits, and safety checks. It may share infrastructure while retaining per-identity instruction, capability, and voice-register profiles. The shared TTS model is the house's mouth; the identity's register controls whether and how it speaks. Intentional silence and conjunction-only speech are enforced policies.
6. **Data and memory** — separate operational state, user-owned memory, audit metadata, and canonical identity data. Memory is scoped by owner and purpose; no runtime reads another identity's or user's memory without an explicit authorization path. Avoid storing raw perception data when semantic packets suffice.
7. **Event and audit layer** — versioned events include event ID, source identity/runtime, schema version, timestamp, correlation ID, sensitivity, and provenance. Use idempotent handling and append-only accountability records. Keep secrets and raw sensitive content out of events and ordinary logs.

## 3. Supabase deployment boundary

If the project proceeds on Supabase, use Postgres for operational metadata and scoped application state, and Storage for binary assets. Keep canonical source objects in a restricted bucket with write access limited to the asset-curation path. Serve approved public art separately only after its access classification is confirmed. Public buckets permit unauthenticated reads; private objects require authenticated access or server-signed URLs. Version each object path rather than replacing files, and retain the canonical SHA-256 in the registry.

Enable RLS on every exposed table. Policies must check both the signed-in user and ownership/scope; the authenticated role alone is not sufficient. Keep service/secret keys on trusted server code only. The identity assignment table should be read-only to client roles; application profile updates must not mutate canonical avatar or identity fields. The connected Supabase projects discovered during this pass are inactive, so no schema or bucket is deployed by this proposal.

## 4. Suggested contract boundaries

- **IdentityRecord:** stable ID, public/call/tongue names, role, canon revision, voice policy, status.
- **AssetRecord:** asset ID, subject/brand IDs, class (avatar, paired, emblem, logo, scene), canonical source hash, repository/path, visibility, revision, provenance, verification state.
- **RuntimeDescriptor:** runtime ID, owner identity, capabilities, contract version, deployment version, data scopes, health state.
- **IntelligenceRequest / IntelligenceResponse:** typed task and result, caller, consent/scope, correlation ID, provenance, confidence, and explicit refusal/degradation state.
- **MemoryRecord:** owner/user scope, purpose, retention class, source event, access policy, and deletion state.
- **VoicePolicy:** permitted register, silence rule, conjunction constraints, and optional approved voice asset reference.

These are logical contracts, not a claim that particular SQL tables or APIs already exist. Freeze their schemas only after choosing the active Supabase project and aligning them with the repositories that own the runtimes.

## 5. Rollout sequence and completion evidence

1. Resolve all 34 PDF inventory entries to the actual founder-supplied binary source, confirm the visual assignment, and record source filename/hash. Do not use the inventory's extracted-byte hashes as a substitute for source hashes.
2. Transfer originals byte-for-byte into their assigned repositories or asset store; verify remote hashes. The GitHub content workflow used for this audit can write text but did not transfer image bytes, so this gate remains open.
3. Add an asset manifest and checks that reject duplicate identity assignments, wrong repository/path, modified source bytes, unapproved derivatives, and missing references.
4. Implement registry resolution and explicit missing-image states in consuming applications. Verify rendered avatars against their canonical source and verify logos resolve by brand ID and revision.
5. Select and activate the intended Supabase project, then implement schema, storage policies, and RLS from the finalized contracts. Run security advisors and role-scoped verification before any production data is written.
6. Implement each runtime behind its capability contract, followed by per-runtime privacy, isolation, policy, persistence, and integration evidence. Do not label a service an intelligence until its behavior is implemented and verified.

A work item is complete only with a source path, source hash, consuming runtime reference, and verification evidence. Architecture text alone does not satisfy an asset or runtime completion gate.
