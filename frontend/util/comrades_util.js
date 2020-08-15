export const createComrade = (comrade) => (
  $.ajax({
    method: "POST",
    url: "/api/comrades",
    data: { comrade },
    dataType: "json"
  })
);

export const deleteComrade = (comradeId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/comrades/${ comradeId }`,
    dataType: "json"
  })
);

export const updateComrade = (comrade) => (
  $.ajax({
    method: "PATCH",
    url: `/api/comrades/${ being.id }`,
    data: { comrade },
    dataType: "json"
  })
);
