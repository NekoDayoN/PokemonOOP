const nicknameChecker = args => {
    if(args.pokemon === undefined) { return args.className.new; }

    const usedNickname = args.pokemon.name !== args.className.old;
    if(usedNickname) {
        return args.pokemon.name;
    }

    return args.className.new;
}

module.exports = nicknameChecker;
