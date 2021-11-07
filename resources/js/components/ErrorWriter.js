export const ErrorWriter = ({errors}) => {
    console.log(errors)
    console.log('hello?')

    const keys = Object.keys(errors)
    console.log(keys)

    return keys.map((key) => {
        return errors[key].map((data, index) => {
            return (
                <div key={index} className={'validation-error'}>
                    <p >
                        {data}
                    </p>
                </div>

            )
        })
    })
}
