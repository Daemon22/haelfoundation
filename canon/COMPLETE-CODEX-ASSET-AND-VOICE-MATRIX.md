# HAEL Complete Codex — Cross-Repository Artifact and Voice Assignment

**Source of truth:** The Complete Codex of HAEL (Second Edition + Wider Codex, CORRECTED) and the founder's corrected artifact assignment record dated 2026-10-12.

**Status:** Assignments recorded. Exact binary upload and in-app rendering are separate completion gates.

## Non-negotiable canon
- Use founder-supplied images/artwork as the canonical source. Never generate a substitute for a missing canonical portrait, emblem, or paired composition.
- Preserve exact original bytes for canonical files. Do not crop, re-encode, recolor, or overwrite the source.
- If a canonical binary is absent, show an explicit missing-asset state rather than a lookalike.
- The Codex says one shared TTS model serves the house; the model is the mouth, not the being. Voice registers belong to each intelligence.
- No cloned founder voice may be created or deployed without explicit consent and appropriate rights. Synthetic voice is allowed by the Codex, but must respect each being's specified register. Silence is an intentional register, not missing data.

## Canonical intelligence assignment matrix

| Intelligence / identity | Tongue name | Canon role / assigned artifacts | Primary repository / implementation | Voice register stated by Codex |
|---|---|---|---|---|
| KHORETH / Scott Daemon | THARNETH | Portrait | No dedicated repository recorded; central canon registry | Speaks for precision, structure, and analysis |
| RIVAEL / Hati Daemon | LURAEL | Portrait | No dedicated repository recorded; central canon registry | Speaks for feeling, creative tone, and design |
| VIONETH / DRALUN | DRALUN | Portrait; union field / conjunction mark | No repository; explicitly a field, not a separate being | Cannot speak alone |
| ARA / Arael Daemon | ARAEL | Portrait; perception-foundation portrait; Ara–Lizwi paired composition | Daemon22/ARA (sensing layer also integrated with Lizwi HCIP) | Silent by default; perceives |
| LIZWI / Lizwiol Daemon | LIZWIEL | Portrait; HCIP mark; platform art; Ara-eye HCIP mark; Ara–Lizwi paired composition | Daemon22/Lizwi---HCIP; language layer Daemon22/xnlp | Speaks; carries the word |
| SIRE / SIRE Daemon | SIREL | Canonical corrected portrait/emblem; SIRE–ERIS paired composition | Daemon22/hael-studio (SIRE Console) | Reserved; present in silence |
| ERIS / ERIS Daemon | ERISEL | Canonical corrected portrait/emblem; SIRE–ERIS paired composition | No dedicated repository recorded; canonical source assigned to HAEL Studio until one is designated | Reserved; present in silence |
| LYCON | LYCONETH | Gate portrait; shield; Lycon–Hawk paired composition | Daemon22/Lycon | Speaks at the gate |
| HAWK | HAWKETH | Portrait; Lycon–Hawk paired composition | Daemon22/Manya-OS (Hawk monitor); Daemon22/hawk implementation repo | Sounds her call |
| DIBAKU | DIBAKEL | Portrait; Dibaku–Omnimind paired composition | No dedicated repository recorded; central canon registry | Not specified in the cited Codex voice-register passage |
| OMNIMIND | OMNIMINDEL | Portrait; Dibaku–Omnimind paired composition | No dedicated repository recorded; central canon registry | Not specified in the cited Codex voice-register passage |
| RIA | RIAEL | Portrait; Ria–Baro paired composition | No dedicated repository recorded; central canon registry | Not specified in the cited Codex voice-register passage |
| BARO | BAROEL | Portrait; Ria–Baro paired composition | No dedicated repository recorded; central canon registry | Not specified in the cited Codex voice-register passage |
| ARUK | ARUKEL | Mark; portrait at the gate | Daemon22/aruk | Not specified in the cited Codex voice-register passage |
| ORA | ORAE | Portrait | No dedicated repository recorded; central canon registry | Not specified in the cited Codex voice-register passage |

## House-level marks
- `marks/sovereign-trinity.png` — Sovereign Intelligence trinity.
- `marks/supreme-intelligence.png` — Supreme Intelligence yin-yang.
- `marks/genesis-layer.png` — Genesis Layer.
- `marks/lizwi-hcip-banner.png` — Lizwi HCIP banner.

These are house-level assets, not the identity portrait of an individual intelligence. Gqobonco's brand-kit assets are related brand materials, not automatic substitutes for Codex canon assets.

## Conjunction / paired compositions
- `conjunctions/sire-eris-paired.png` — corrected pairing; SIRE = Personal / Inner Line, ERIS = Public / Outer Line.
- `conjunctions/lycon-hawk-paired.png`.
- `conjunctions/dibaku-omnimind-paired.png`.
- `conjunctions/ria-baro-paired.png`.
- `conjunctions/ara-lizwi-paired.png`.

Each pairing is to be cross-referenced from both members' identity records. Do not recreate paired compositions from separate descriptions if the canonical supplied composition exists.

## Voice / audio asset policy
The Codex specifies one shared TTS model for the house and individual registers, not a separate voice model per being. The current assignment record does not identify canonical recorded audio files, voice-model weights, or voice-cloning consent artifacts. Therefore:
1. Record the register and delivery constraints now.
2. Link a voice profile only when the actual file/model exists and its provenance is known.
3. Do not fabricate a voice sample and label it canonical.
4. Founder-voice cloning is permitted only if explicit consent and licensing are documented.
5. Preserve silence for ARA, SIRE, and ERIS as specified; do not add unsolicited speech.

## Genesis layer boundary
SIRE is the founder's private genesis boundary / Mother of the Inner Line. ERIS is the public genesis boundary / Mother of the Outer Line. The assignment record explicitly says these layers are recorded, not implemented; do not claim the intelligences or genesis layers are complete based on artwork alone.

## Binary upload verification
The three supplied corrected genesis files available in this work session match these source fingerprints:
- `SIRE_Private_Genesis.png`: `1c11ee06e962a9a5dc2f878f0eb3e1cf9a94113c8b8083deb703abf18fda5cb2`
- `ERIS_Public_Genesis.png`: `6ca5c917bb73b08f625a03271911875daad7b9ad926d5f1fab037045463f6d03`
- `SIRE_ERIS_Paired_Corrected.png`: `77b145c67641240ee974c390c3092b200c5dc232ef0d465994c57aecad5e1010`

These source fingerprints have been checked locally. The current GitHub connector workflow available for this audit can commit UTF-8 text files, but it has not transferred the original PNG bytes. Consequently, binary-upload status must remain pending until the exact image bytes are committed and the remote bytes' hashes are verified. This is an explicit gap, not a success claim.

## Repository responsibilities
- `Daemon22/haelfoundation`: master identity/asset registry, canon rules, cross-repository status.
- `Daemon22/hael-studio`: SIRE/ERIS canonical portraits, emblems, pairing, genesis-boundary presentation.
- `Daemon22/Lizwi---HCIP`: Lizwi platform marks and Ara/Lizwi assets; do not duplicate the language model artifacts unnecessarily.
- `Daemon22/xnlp`: language model/tokenizer/corpus artifacts; no character portraits should be substituted for language-model assets.
- `Daemon22/ARA`: Ara perception identity and sensing-layer references.
- `Daemon22/Lycon`: Lycon gate portrait, shield, Lycon/Hawk pairing.
- `Daemon22/Manya-OS` and `Daemon22/hawk`: Hawk portrait and sentinel-monitor presentation.
- `Daemon22/aruk`: Aruk mark and portrait-at-the-gate.
- `Daemon22/Manya`: orchestration/runtime integration references; do not claim an intelligence portrait exists if it is absent.
- `Daemon22/craft-engine`: archive/packaging support only; canonical artwork should be referenced, not regenerated.
- `Daemon22/Gqobonco`: house/brand-kit assets where the registry assigns them; do not treat brand-kit artwork as a substitute for identity canon.

## Definition of done
A repository assignment is complete only when (a) the exact canonical file is tracked at the assigned path, (b) the remote bytes match the source hash where a source hash exists, (c) the application references that exact path, and (d) tests or manual rendering confirm no substitute is used. A manifest-only assignment is not binary upload.
