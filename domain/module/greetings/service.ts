type Input = {
    name: string
}

type Output = {
    greetings: string
}

export function service(): (req: Input) => Output {
    return (req: Input): Output => {
        return {greetings: `Hi, ${req.name}! :)`}
    }
}
