export const fetchPlayers = () => (
    $.ajax({
        method: 'GET',
        url: 'api/players'
    })
);

export const updatePlayer = (player) => (
    $.ajax({
        method: 'PATCH',
        url: `api/players/${player.id}`,
        data: { player }
    })
);