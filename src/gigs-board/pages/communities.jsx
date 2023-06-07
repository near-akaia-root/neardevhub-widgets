/* INCLUDE: "common.jsx" */
const nearDevGovGigsContractAccountId =
  props.nearDevGovGigsContractAccountId ||
  (context.widgetSrc ?? "devgovgigs.near").split("/", 1)[0];

const nearDevGovGigsWidgetsAccountId =
  props.nearDevGovGigsWidgetsAccountId ||
  (context.widgetSrc ?? "devgovgigs.near").split("/", 1)[0];

function widget(widgetName, widgetProps, key) {
  widgetProps = {
    ...widgetProps,
    nearDevGovGigsContractAccountId: props.nearDevGovGigsContractAccountId,
    nearDevGovGigsWidgetsAccountId: props.nearDevGovGigsWidgetsAccountId,
    referral: props.referral,
  };

  return (
    <Widget
      src={`${nearDevGovGigsWidgetsAccountId}/widget/gigs-board.${widgetName}`}
      props={widgetProps}
      key={key}
    />
  );
}

function href(widgetName, linkProps) {
  linkProps = { ...linkProps };

  if (props.nearDevGovGigsContractAccountId) {
    linkProps.nearDevGovGigsContractAccountId =
      props.nearDevGovGigsContractAccountId;
  }

  if (props.nearDevGovGigsWidgetsAccountId) {
    linkProps.nearDevGovGigsWidgetsAccountId =
      props.nearDevGovGigsWidgetsAccountId;
  }

  if (props.referral) {
    linkProps.referral = props.referral;
  }

  const linkPropsQuery = Object.entries(linkProps)
    .filter(([_key, nullable]) => (nullable ?? null) !== null)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  return `/#/${nearDevGovGigsWidgetsAccountId}/widget/gigs-board.pages.${widgetName}${
    linkPropsQuery ? "?" : ""
  }${linkPropsQuery}`;
}
/* END_INCLUDE: "common.jsx" */

/* INCLUDE: "shared/mocks" */
const communities = {
  "zero-knowledge": {
    overviewId: 397,
    eventsId: 401,

    icon: "https://ipfs.near.social/ipfs/bafkreiajwq6ep3n7veddozji2djv5vviyisabhycbweslvpwhsoyuzcwi4",

    cover:
      "https://ipfs.near.social/ipfs/bafkreihgxg5kwts2juldaeasveyuddkm6tcabmrat2aaq5u6uyljtyt7lu",

    title: "Zero Knowledge",
    desc: "Building a zero knowledge ecosystem on NEAR.",
    telegram: "NearZeroKnowledge",
  },

  protocol: {
    overviewId: 412,
    eventsId: 413,

    icon: "https://ipfs.near.social/ipfs/bafkreidpitdafcnhkp4uyomacypdgqvxr35jtfnbxa5s6crby7qjk2nv5a",

    cover:
      "https://ipfs.near.social/ipfs/bafkreicg4svzfz5nvllomsahndgm7u62za4sib4mmbygxzhpcl4htqwr4a",

    title: "Protocol",
    desc: "Supporting the ongoing innovation of the NEAR Protocol.",

    integrations: {
      github: {
        boards: {
          "18855b9c9f2-216091d-6484800b-42593f54-6102b48a": {
            id: "18855b9c9f2-216091d-6484800b-42593f54-6102b48a",

            columns: {
              "18855f4a93e-76a9b704-14c3ebdb-1e6c0f05-22653630": {
                id: "18855f4a93e-76a9b704-14c3ebdb-1e6c0f05-22653630",

                description:
                  "NEPs that need a moderator review or author revision.",

                labelSearchTerms: ["WG-protocol", "S-draft"],
                title: "📄 Draft",
              },

              "18877dc932c-c309c28--4b95e909--220e9bbb--51ff54c9": {
                description:
                  "NEPS that need a review by Subject Matter Experts.",

                labelSearchTerms: ["WG-protocol", "S-review"],
                title: "👀 Review",
                id: "18877dc932c-c309c28--4b95e909--220e9bbb--51ff54c9",
              },

              "18877dd71e5-47d177b8-5505178-640a5937--17968e87": {
                description:
                  "NEPS in the final review stage that need the work group voting indications.",

                labelSearchTerms: ["WG-protocol", "S-voting"],
                title: "✔ Voting",
                id: "18877dd71e5-47d177b8-5505178-640a5937--17968e87",
              },

              "18877e14753--5b0ca250-1edea464-523fd579--5ebde527": {
                description:
                  "NEPS that were reviewed and approved by a work group.",

                labelSearchTerms: ["WG-protocol", "S-approved"],
                title: "✅ Approved NEPs",
                id: "18877e14753--5b0ca250-1edea464-523fd579--5ebde527",
              },

              "18877e2f94c-4cc0ff57--1fb016c6--39ce0459-23922e81": {
                description:
                  "NEPS that were reviewed and approved by a work group or NEP moderators.",

                labelSearchTerms: ["WG-protocol", "A-NEP-GrammarFix"],
                title: "🔧 Approved Fixes",
                id: "18877e2f94c-4cc0ff57--1fb016c6--39ce0459-23922e81",
              },

              "18877e40c46--76d23f4d-578f24a8--2cfcd190--74aa77be": {
                description:
                  "NEPs that were retracted by the author or had no activity for over two months.",

                labelSearchTerms: ["WG-protocol", "S-retracted"],
                title: "❌ RETRACTED",
                id: "18877e40c46--76d23f4d-578f24a8--2cfcd190--74aa77be",
              },
            },

            dataTypesIncluded: { Issue: false, PullRequest: true },
            description: "Latest NEAR Enhancement Proposals by status",
            repoURL: "https://github.com/near/NEPs",
            ticketState: "all",
            title: "NEAR Protocol NEPs",
          },
        },
      },
    },

    telegram: "NEAR_Protocol_Community_Group",
  },

  tooling: {
    overviewId: 416,
    eventsId: 417,

    icon: "https://ipfs.near.social/ipfs/bafkreie2eaj5czmpfe6pe53kojzcspgozebdsonffwvbxtpuipnwahybvi",

    cover:
      "https://ipfs.near.social/ipfs/bafkreiehzr7z2fhoqqmkt3z667wubccbch6sqtsnvd6msodyzpnf72cszy",

    title: "Tooling",
    desc: "Supporting the ongoing innovation of tooling.",

    integrations: {
      github: {
        boards: {
          "18855b9c9f2-216091d-6484800b-42593f54-6102b48a": {
            id: "18855b9c9f2-216091d-6484800b-42593f54-6102b48a",

            columns: {
              "18855f4a93e-76a9b704-14c3ebdb-1e6c0f05-22653630": {
                id: "18855f4a93e-76a9b704-14c3ebdb-1e6c0f05-22653630",

                description:
                  "NEPs that need a moderator review or author revision.",

                labelSearchTerms: ["WG-tools", "S-draft"],
                title: "📄 Draft",
              },

              "18877dc932c-c309c28--4b95e909--220e9bbb--51ff54c9": {
                description:
                  "NEPS that need a review by Subject Matter Experts.",

                labelSearchTerms: ["WG-tools", "S-review"],
                title: "👀 Review",
                id: "18877dc932c-c309c28--4b95e909--220e9bbb--51ff54c9",
              },

              "18877dd71e5-47d177b8-5505178-640a5937--17968e87": {
                description:
                  "NEPS in the final review stage that need the work group voting indications.",

                labelSearchTerms: ["WG-tools", "S-voting"],
                title: "✔ Voting",
                id: "18877dd71e5-47d177b8-5505178-640a5937--17968e87",
              },

              "18877e14753--5b0ca250-1edea464-523fd579--5ebde527": {
                description:
                  "NEPS that were reviewed and approved by a work group.",

                labelSearchTerms: ["WG-tools", "S-approved"],
                title: "✅ Approved NEPs",
                id: "18877e14753--5b0ca250-1edea464-523fd579--5ebde527",
              },

              "18877e2f94c-4cc0ff57--1fb016c6--39ce0459-23922e81": {
                description:
                  "NEPS that were reviewed and approved by a work group or NEP moderators.",

                labelSearchTerms: ["WG-tools", "A-NEP-GrammarFix"],
                title: "🔧 Approved Fixes",
                id: "18877e2f94c-4cc0ff57--1fb016c6--39ce0459-23922e81",
              },

              "18877e40c46--76d23f4d-578f24a8--2cfcd190--74aa77be": {
                description:
                  "NEPs that were retracted by the author or had no activity for over two months.",

                labelSearchTerms: ["WG-tools", "S-retracted"],
                title: "❌ RETRACTED",
                id: "18877e40c46--76d23f4d-578f24a8--2cfcd190--74aa77be",
              },
            },

            dataTypesIncluded: { Issue: false, PullRequest: true },
            description: "Latest NEAR Enhancement Proposals by status",
            repoURL: "https://github.com/near/NEPs",
            ticketState: "all",
            title: "NEAR Tooling NEPs",
          },
        },
      },
    },

    telegram: "NEAR_Tools_Community_Group",
  },

  "contract-standards": {
    overviewId: 414,
    eventsId: 415,

    icon: "https://ipfs.near.social/ipfs/bafkreiepgdnu7soc6xgbyd4adicbf3eyxiiwqawn6tguaix6aklfpir634",

    cover:
      "https://ipfs.near.social/ipfs/bafkreiaowjqxds24fwcliyriintjd4ucciprii2rdxjmxgi7f5dmzuscey",

    title: "Contract Standards",
    desc: "Coordinating the contribution to the NEAR dapp standards.",

    integrations: {
      github: {
        boards: {
          "18855b9c9f2-216091d-6484800b-42593f54-6102b48a": {
            id: "18855b9c9f2-216091d-6484800b-42593f54-6102b48a",

            columns: {
              "18855f4a93e-76a9b704-14c3ebdb-1e6c0f05-22653630": {
                id: "18855f4a93e-76a9b704-14c3ebdb-1e6c0f05-22653630",

                description:
                  "NEPs that need a moderator review or author revision.",

                labelSearchTerms: ["WG-contract-standards", "S-draft"],
                title: "📄 Draft",
              },

              "18877dc932c-c309c28--4b95e909--220e9bbb--51ff54c9": {
                description:
                  "NEPS that need a review by Subject Matter Experts.",

                labelSearchTerms: ["WG-contract-standards", "S-review"],
                title: "👀 Review",
                id: "18877dc932c-c309c28--4b95e909--220e9bbb--51ff54c9",
              },

              "18877dd71e5-47d177b8-5505178-640a5937--17968e87": {
                description:
                  "NEPS in the final review stage that need the work group voting indications.",

                labelSearchTerms: ["WG-contract-standards", "S-voting"],
                title: "✔ Voting",
                id: "18877dd71e5-47d177b8-5505178-640a5937--17968e87",
              },

              "18877e14753--5b0ca250-1edea464-523fd579--5ebde527": {
                description:
                  "NEPS that were reviewed and approved by a work group.",

                labelSearchTerms: ["WG-contract-standards", "S-approved"],
                title: "✅ Approved NEPs",
                id: "18877e14753--5b0ca250-1edea464-523fd579--5ebde527",
              },

              "18877e2f94c-4cc0ff57--1fb016c6--39ce0459-23922e81": {
                description:
                  "NEPS that were reviewed and approved by a work group or NEP moderators.",

                labelSearchTerms: ["WG-contract-standards", "A-NEP-GrammarFix"],
                title: "🔧 Approved Fixes",
                id: "18877e2f94c-4cc0ff57--1fb016c6--39ce0459-23922e81",
              },

              "18877e40c46--76d23f4d-578f24a8--2cfcd190--74aa77be": {
                description:
                  "NEPs that were retracted by the author or had no activity for over two months.",

                labelSearchTerms: ["WG-contract-standards", "S-retracted"],
                title: "❌ RETRACTED",
                id: "18877e40c46--76d23f4d-578f24a8--2cfcd190--74aa77be",
              },
            },

            dataTypesIncluded: { Issue: false, PullRequest: true },
            description: "Latest NEAR Enhancement Proposals by status",
            repoURL: "https://github.com/near/NEPs",
            ticketState: "all",
            title: "NEAR Contract Standards NEPs",
          },
        },
      },
    },

    telegram: "nearnft",
  },
};
/* END_INCLUDE: "shared/mocks" */

const CommunitiesPage = ({}) => (
  <div className="d-flex flex-column">
    {widget("components.layout.Banner", { style: { marginBottom: 0 } })}

    <div className="d-flex flex-column gap-4 p-4">
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column gap-2">
          <h1 className="m-0 fs-4">Communities</h1>

          <p className="m-0 text-secondary fs-6">
            Discover NEAR developer communities
          </p>
        </div>

        <div className="d-flex flex-column justify-content-center">
          <a className="btn btn-primary" href={href("community.new")}>
            Create community
          </a>
        </div>
      </div>

      <div className="d-flex gap-4">
        {Object.entries(communities).map(([label, community]) =>
          widget("entity.community.card", { label, ...community }, label)
        )}
      </div>
    </div>
  </div>
);

return CommunitiesPage(props);
