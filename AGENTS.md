<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Application rules
- Keep resume content and skill filtering in the browser-safe `src/lib/cv-data.ts` module so presentation and filtering can share a testable source of truth.
- Serve supplied portraits and the original downloadable resume through Lovable Assets pointers to avoid bundling binaries.
- Keep the resume as one index route with anchored sections; chronology expansion and category filters are client-side presentation state.

- Keep both CV languages in the browser-safe CV data module and select them with the index route’s validated `lang` search parameter so shared links, page metadata and document language stay aligned.
