# The Lab — Month 1 site update

This working copy implements the first-month foundation:

- homepage repositioned around Radiation Oncology Weekly and Clinical Horizon Scan;
- dedicated publication landing pages;
- author page rewritten with credentials, scope, independence, and disclaimer language;
- editorial methodology and corrections page added;
- library and project navigation reorganized;
- recurring series metadata added to literature collection posts;
- reusable publication cards, newsletter/RSS panel, and author box added;
- SEO description, canonical site URL, sitemap, robots file, custom collection RSS feed, and social image metadata improved;
- malformed front matter repaired in three June/July digest files;
- responsive light/dark design consolidated in `assets/css/custom.css`.

## Newsletter connection

The subscription component is live but defaults to RSS until an email provider exists. After creating a Buttondown, Kit, Beehiiv, Substack, or similar account, set the public signup URL in `_config.yml`:

```yml
newsletter_url: "https://your-public-signup-page"
```

The site will automatically show a **Subscribe by email** button beside RSS.

## Deployment

1. Review the changed files locally or on a branch.
2. Replace the repository contents with this working copy, preserving the `.git` folder if using an existing local clone.
3. Commit the changes.
4. Push to the branch configured for GitHub Pages.
5. In GitHub, check **Actions** or **Settings → Pages** for the deployment result.

## Suggested commit message

`Reposition site around weekly clinical publications`

## Month 2 and Month 3 preparation

The repository also contains:

- `_drafts/how-i-keep-up-with-radiation-oncology-literature.md`
- `_drafts/how-to-critically-evaluate-clinical-ai-papers.md`
- `_DISTRIBUTION_PLAYBOOK.md`
- `_OUTREACH_TEMPLATES.md`

The two articles are unpublished Jekyll drafts. Move them into `_litreview/` with a dated filename and final permalink when ready to publish. The playbooks are private working files and will not appear in the generated site.
