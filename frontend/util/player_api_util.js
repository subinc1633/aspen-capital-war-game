export const fetchPlayers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/players'
    })
);

export const updatePlayers = (playerId) => (
    $.ajax({
        method: 'PATCH',
        url: `api/players/${playerId}`
    })
);