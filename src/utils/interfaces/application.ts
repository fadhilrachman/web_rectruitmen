interface RequestBodyApplication {
  user?: string;
  job?: string;
  status:
    | "in review"
    | "enter the shortlist"
    | "interview"
    | "test"
    | "recruited"
    | "inappropriate";
  notes?: string;
  cover_latter?: string;
}

export default RequestBodyApplication;
