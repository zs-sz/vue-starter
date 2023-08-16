export const sanitizeString = (str): string => {
	str = str.replace(/[^a-z0-9áéíóúñü \.,_-]/gim, "");
	return str.trim();
};

// same as above but replace / with space
