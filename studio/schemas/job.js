export default {
  name: "job",
  title: "Job",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Company Name",
      type: "string",
    },
    {
      name: "position",
      title: "Position Title",
      type: "string",
    },
    {
      name: "startDate",
      title: "Start Date",
      type: "datetime",
    },
    {
      name: "endDate",
      title: "End Date",
      type: "datetime",
    },
    {
      name: "description",
      title: "Description",
      type: "blockContent",
    },
  ],
  orderings: [
    {
      title: 'Start Date',
      name: 'startDateDesc',
      by: [
        {field: 'startDate', direction: 'desc'}
      ]
    },
    {
      title: 'End Date',
      name: 'endDateDesc',
      by: [
        {field: 'endDate', direction: 'desc'}
      ]
    },
  ]
};
