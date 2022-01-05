export function formatErrorMessages(error) {
  return Object.keys(error)
    .reduce((keyAcc, key) => {
      const errs = error[key].reduce((errAcc, item) => {
        errAcc.push(`${key} ${item}`);
        return errAcc;
      }, []);
      return [...keyAcc, ...errs];
    }, []);
}

export function getRequestOptions(authToken) {
  return {
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  };
}

export function addSingleFavToLocalStorage(course) {
  let favorites;
  const existingFavs = localStorage.getItem('favCourses');
  if (existingFavs?.length) {
    favorites = [...existingFavs, course];
  } else {
    favorites = [course];
  }
  localStorage.setItem('favCourses', JSON.stringify(favorites));
}
