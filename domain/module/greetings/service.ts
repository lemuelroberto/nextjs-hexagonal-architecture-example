type Input = {
    name: string
}

type Output = {
    greetings: string
    executedAt: Date
}

type DatePort = () => Date

export function service(now: DatePort): (req: Input) => Output {
    return (req: Input): Output => {
        return {
            greetings: `Hi, ${req.name}! :)`,
            executedAt: now(),
        }
    }
}
