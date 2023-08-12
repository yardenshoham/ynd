import { CinemaCityMovie, City } from "~/types.ts";

const CinemaCityTheatreId: { [key in City]: number } = {
  גלילות: 1170,
  "כפר-סבא": 1175,
  נתניה: 1176,
};

export const getCinemaCityMoviesByTheater = async (
  theaterId: City,
): Promise<CinemaCityMovie[]> => {
  const response = await fetch(
    `https://www.cinema-city.co.il/tickets/Events?TheatreId=${
      CinemaCityTheatreId[theaterId]
    }&VenueTypeId=1&MovieId=0&Date=0`,
  );
  const movies: CinemaCityMovie[] = await response.json();
  return movies;
};
