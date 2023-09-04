/* INCLUDE: "core/lib/gui/attractable" */
const AttractableDiv = styled.div`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
`;

const AttractableLink = styled.a`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
`;

const AttractableImage = styled.img`
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075) !important;
  transition: box-shadow 0.6s;

  &:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }
`;
/* END_INCLUDE: "core/lib/gui/attractable" */

const ticketStates = {
  closed: { displayName: "Closed", icon: "bi-lock-fill" },
  open: { displayName: "Open", icon: "bi-unlock-fill" },
};

const ticketTypes = {
  Issue: { displayName: "Issue", icon: "bi-lightbulb-fill" },
  PullRequest: { displayName: "Pull request", icon: "bi-git" },
};

const GithubTicket = ({
  config,

  data: {
    _links,
    labels,
    number,
    state: ticketState,
    title,
    type,
    user: author,
  },
}) => (
  <AttractableDiv className="card border-secondary">
    <div className="card-header">
      <div class="d-flex justify-content-between gap-3">
        <a
          className="d-flex gap-2 link-dark text-truncate"
          href={author.html_url}
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt={`${author.login}'s GitHub avatar`}
            className="img-fluid rounded"
            src={author.avatar_url}
          />

          <span className="ms-1 text-muted">@{author.login}</span>
        </a>

        <a
          className="card-link"
          href={_links.html.href}
          rel="noreferrer"
          role="button"
          target="_blank"
          title="Open in new tab"
        >
          <i className="bi bi-share" />
        </a>
      </div>
    </div>

    <div className="card-body d-flex flex-column gap-3">
      <div className="card-text d-flex flex-column gap-3">
        <span className="d-flex flex-nowrap gap-2">
          <i
            className={`bi ${ticketStates[ticketState].icon}`}
            title={ticketStates[ticketState].displayName}
          />

          <i className={`bi ${ticketTypes[type].icon}`} />
          <span>{`${ticketTypes[type].displayName} #${number}`}</span>
        </span>

        <span>{title}</span>
      </div>

      <div className="card-title d-flex flex-wrap gap-2 m-0">
        {labels.map((label) => (
          <a href={label.url} key={label.id} title={label.description}>
            <span
              className="badge text-wrap"
              style={{ backgroundColor: `#${label.color}` }}
            >
              {label.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  </AttractableDiv>
);

return GithubTicket(props);
