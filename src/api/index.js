export const baseURL = `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_MY_API_KEY}`;

// intended to be called with baseURL:
export async function fetchImages(url, count = 16, options) {
        console.log('get images fetch hit!');
        const response = await fetch(`${url}&count=${count}`);
        const data = await response.json();
        return data;
}

// intended for use with a date-picker
export async function fetchImagesByDate(url, options) {
        console.log('get images fetch hit!');
        const { start_date, end_date } = options;
        const dateURL = `${url}&start_date=${start_date}&end_date=${end_date}`;
        const response = await fetch(dateURL);
        const data = await response.json();
        console.log('data>>>', data);
        return data;
};
