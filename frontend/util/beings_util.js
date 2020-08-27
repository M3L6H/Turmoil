export const fetchBeings = (search="") => (
  $.ajax({
    method: "GET",
    url: "/api/beings",
    dataType: "json",
    data: search
  }) 
);

export const fetchBeing = (beingId) => (
  $.ajax({
    method: "GET",
    url: `/api/beings/${ beingId }`,
    dataType: "json"
  })
);

export const createBeing = (being) => (
  $.ajax({
    method: "POST",
    url: "/api/beings",
    data: { being },
    dataType: "json"
  })
);

export const deleteBeing = (beingId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/beings/${ beingId }`,
    dataType: "json"
  })
);

export const updateBeing = (being) => (
  $.ajax({
    method: "PATCH",
    url: `/api/beings/${ being.id }`,
    data: { being },
    dataType: "json"
  })
);
