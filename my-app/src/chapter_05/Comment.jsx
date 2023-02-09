import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    imageContainer: {},
    image: {
        width: 5,
        heigth: 5,
        borderRadius: 25,
    },
    contentContainer: {
        marginLeft: 8,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    },
    nameText: {
        color: "black",
        fontSize: 16,
        fontWeight: "bold",
    },
    commentText: {
        color: "black",
        fontSize: 16,
    },
};

function Comment(props){
    return (
        <div style={styles.wrapper}>
            <div style={styles.imageContainer}>
                <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAAD7+/vx8fHR0dH39/fZ2dn09PTMzMzt7e2tra2MjIx8fHzm5ubAwMDw8PBsbGySkpLf39+ZmZmEhIQ3NzcyMjJnZ2cnJydCQkK6urpbW1uhoaHi4uIgICCoqKhNTU1zc3MMDAxVVVU+Pj4aGholJSVISEgbGxtQUFBZWVmKZHKXAAAPDklEQVR4nO1d6WKqsBKuCqiguG+IC7a29bz/A97TnjozCQGyTNB7b7+fgkmGTGbLZPLy8otf/OL/A2FveAjS+JTni7/IT3E2OAwn/UcPiwP9+SAfbT62HRWOH5tRPphPHj1IawTxdHdUkibi+jY9DbqPHq0hwjRZa9BG8b7Meo8etibCaLYzpO6Ot2Tw9FSG6VS95nRx2WTDRxNRg3RzcSLvB/vs0YSoES05qPvBKHo0OTL62QcjfV/YnZ5Ji4yX16YBX1av02WSzL6QJMvidd3I0Jfl+NGE/SDa1I1zPc2zQD0dkyDLp7VaZfMMzBr8qRre5y1JdUYYpcnts6qRW+CdgnoE+6qvn0cmqq0X5VWcsH8kjWP1qK5JEFq0FgazdzWNc/aR66E3Ug1ntXCRD4d8pWp09BA3JFaMZD1zFw3RTCV8TgwjNkOgsD2nTB5Cd6Dg/reWl6PCfplx2pOTmYJVGdtvQlrS1quYvZO4vCJT9k7U6JYkzM5P12lpJYxacZQDWRCs/H3aVO5r3YKRs5D6vPh1dTLZ4l147e6vD/HacoflT3rzqhsDyeiYtuGPDwux061HTpWU/PvAX1cCBpJhzi+4fyDJ0MRXPwpI6tGPauyKhsZbu65b9Cb0vvGgNiZimCJpO4TbTYT+P9jDjmORTdpagRQDYQQX5hBHJLT++pg9lZ4YTmBdJuLnm3E2bQRR4DB6G4HQ8CPjtakfEgUCj48KKfzD/OiBRIFFPx69rdnfsZMoCJk9R4uOEPQyA0cJaqJwb48BBR2Ss9IYUne+TTutDlT5XxxVf0i53l1LhMPxYTy0CaaKoFrjw8262vMRGMXF+Xs75rI+F7GjuqYkblwaGnERGJV2p65LJzlISXTwNKg/6LAGw1i9wbSOHfiVrkVrf5FqegcpeqpOOTnm9s1S/rLk+T4JWdjrwUF92sna3kshenFrxwwk6PRhO4puUUvfN3dYy0Ii5282/ycxrqOtqTbXyRva2tollMksYn50EdoOIS1Ro4ZtSHlO2jBeit2t+wAyFTXKBAVbh4z0sDZldiKpbBWhTOC2yP596Cgr5MQpWxKJWjTUioS/Xi07l1h0IwrNYCo+thWpRBwasVqX9G0pZeYCAcWh9MK4EN6wXOs9bOFi8j/Co5Yft0ulaEUcPqK8urbrh/rnBnxK5KitsUYnqLpnapfYWk1kO1rf0kVV+mapjmnkoy7J4ETes+UW3Ct+0/0P6dbWySE8Wm8WE+Pelk9JmEUzY6PvzqO5fqcn4/GVQNwMPbGIi+PdsssQvYnm1Y/dHW2dqU+D7l6E0JOtkkLW22q8jRLV1s8jq76slcpAp2Rq2SFZhVq5ifD2yrZDNB803DyiKWy3sHHIehqgMPogKgxx0M0aA2NP1kkIqKH0gpm4Lpa2XaKr1ziJOIVGRpAACDrpsjkw2dW6T3RZmiYRp9B6iynS7uwO/KzWQXp0ZBrcfbSXbfUvkaRbXYMInVH7nTtd6YaC1D6Vq7g3oW9pWvxFBjprtRFiXPM7665ezuYTAjx2tu8WkzXq5BvaP/ZTiH6TvuyHpWsci0DgJNZI5D5IQWvdS3er9EcLHvfFIY0MfIxL9WkbtLYc8qoO0IjBn7Q4rAE6oz/bDE4GiGMThQrz7rKnC6OvDGCjqnDJqYRWTNQ3C4Vo2FRJALS2XJIqrSi8clCI1mmVEwUvWDsVX3gclxJtrn6O4tYpa81N0uj4d5VAP1GtisH+dVBKL9RqMPgT/McptQJVsdLD6AOnuG3Y9yCEob+aYQUd3TIr0GJRqURkUscsAjCf9Jkd2Es7HqgGujUqmwyY1MGe+QY4YPpb2BCbc825ArtGYX6H4MG4HjCA/SD9jdkzV9+gEhWbuuiFuuZRoUTTXYioyFxzjw81LcGXPzp2QiLKuiFejAo7Zz6CmCsHs8/Vj0wBOe+6KxpWz9m5b5iokswK4TO6p2yika/nA2OMxf2oCC4RWe+grnDPq0M21eN43ANwT8/FmZK/LuhKpzy4HxTQjQ7Lo5rmSF8F21T29GEpOORhAch+V7P1EJi83AxQrfKWCWsvJOq6barfMcGNGZYUa/y6onUNC/ST5bQNmcSmoB1J3WL5uGgWixoRxJ9VglgZZIN+VeepkC1qrgNpt3t7ojYu7j8zpXLTdJVVtc83pifSmM6KQaRC9OOBV7hOLQv5QlVqMaMpYFyHxaBnQef3IE7CdlxKOEy3V1moQ+HgBNs5AIwT9VS/uoQRJYh1XUr1gsZiWQbGoyrQJo35gCi133EqoSue+uzsMyRynEl1bWzzdlQA9UP5HtSkU5RNQliq3PZVUSlVVU6yzGJWA1x5aryMVD86o3uWKamA46EQCTBdVP3Ammc+W1hoEch8mgp0OzWx4WNzF4E5qWkSwF1cBwxdsn0RQko4exW4w5uaLMAb+4nNyb1pkmMFvzEqC8CprlrdxUd1JGgd5wsiQfYZJjUIF1U0XhdeTqRC+2hnQCDeNVRagW6skqq7zFPVArDm0SAGhW+btd6MYfxKjdDLn9hfWRTIbkeVD6EgToVfxnyQL6eb6TIf+D0PDiofdR9oEOu8sqcC2C8YugOt9SwHfd0Abg0K6vx/lEK0QWE/43EVLzgBcW/c5/ml8L8MvxT6QXiI0tNsNCqmxWg0O6XRgdPpFaGQNJ5laRQXiisEjrsi9lOxU0GhR304jqsqDf/D/sRf0hpiXKgPfdk0h1znDoHdwilNqAygEG0aCKJyxhO6qVxjsRo3VjcD7FIMb4Pfz+dbVDuFalxmfK6iIiYD/iFXuHSSqOmoRcLlT0EUE7mf2ccPFUWAtcA0j9AefjLeOE2mc7mMGp8sVS2hOdy4wOi0e6xtXBUGfn8d5XGcZVkcL0Y3dfX1TufsrjyAI2kknS9emquG/TFKI1lYdqN0qbwTwzn6BjGZM/mRK+Y9VKj3IquelnE2Lf9BuRVnAGXMm2nfIiiN9iNtMj9Dhdp04yRgI2q/gNnmFIqSOfSy1JuN4VIuB+L0oYt7K5TfWfYPpSK8Jjq8v5BodMlagL07un/IsQcsLcHELG2lJ+lQhz1haIPGLPugwmz38buiXLyZC/2huB6t9xQhl0dMonXNxRArUlrWaRfrr79ZGjjgRoi5SgUwl1Wr4m7vH1txPxE4/WwXBQB2Fx0lx5wogUCXXG2hxPzZqgnIiRItQNBkVnltgtp2y/wRysHa6K4elJCQtCq0aiFqqKt0dLUrx9Rut4iMYdKg9ACUiLmypQleK/fUxh7dFzcXfGB2yKrdPkeYFqndcYQIhZqpxiwBK0aef/s8b5L+w5XZRGbR1MjCPG95+q1z9Ul6GltmE82mMlRfaPyXBgM2idnqJrKPsdL9mJipZl8ctGH5LDA8Mqu+sbYdSj2IH2bGpzD75YlCKWsSnyX2Mu/FIaRClglTodgraz3kfQN9QSrfcCc5ECvCwAjEswgKmWBz/hCzfI/cuTFdLG9loMAglUb1wS3OkJLVwr+LZNN4/RnS0PwcMN6o4SNNBfWQtjsMhvtFqbiA5XTPcpOKSz62O/v6lZF+0K07JPticR4fV6GfC5hQnmquRFTOFfasYYMomXXqztkAA+N6Ggzlb8ULhnUx8HVfl+dpFdVB9BpfR0mkJWvgbYeKSw1AE1zn7ebaJmib6jSIZ1v9Xa1j1ge8XF1g3ajGEAT/tIuWmQPLnP1pflln9CZ1otBg85lmhHZvs2gAVXGtiUMaCA9kIOZMCgFYQaCRTfXEkkG9to32m06AiEajBsPYR62fql1zD/cB/N62DLti7w0hcM2ae/p1E1Gz+L2oE5d7gz+gXRUWt0fqGb8yaMcNTbcVxUKTmY7WdH00ozJoxw0Ic9a72Lip0+j7adaghRZ93yQN66v2ixvUoNWsI4xntdnPgknAhVhjWBjVESaTWJPHB35K7Wl7DnSVm9YSChizjlukVc9bmdHhB6DAqm0xErTVitlixsFn5TvA9/5P2YCdVS0XDGuy00sxKgUliFJv1ysDmjNhjOvq69yNAH6Wn0xtCtWhVwGkzIj290YTr0qQgB72f7MzEFARKyHn/vVN5OY7SuC5/3tXm3J9rO4oab5nBh7zZ9rLaKg0aXfPDC3iXqqZ9Y37Q5fKxprAysuqp+S6EbMEZ/JllPGD+8NrCxRe6yi0ve+p8c6u+zOPMZo7MFajeEgUhWmyH72vSeFH3Q0N/yZNbV8u964JFx2XBeZ9+fsXNHV9Od2dJ95/WJY20Vdka+VfG373tVb3NUFrzS7VjCxilSqNsnboq+yLlvjRCKcqQHM+2lhvpiCJjE1hqiow3SXrCQUZnbV1zHQfsBfQQloODg5t5rnOCNN8SCcflfFeblaw3cv9En48JYl0Bl3LaPXoQYhnWYt08dRcSKIJEqh7FolKpSjHpgI13zp7/5Z2I4SEfharQzivtWOp4OqAiXCygylMJJD47j9uUYf5pwcC5VN3/hITmiHeE80Y6BNJfJzWSHwRKImbzutjFmNfPPvF7NoMxQOCXCVxTSAcp/EQA+uJx++WbauNrlizdudhVy8Uj1C25N/fEYkVJjd+qtuIX7FVG06qQsFU+ruMWOzn2tZqHEhVGjxueEVSaeBpG7G2YSF2+u51v6v/R+yts/AucRZSj69eKoLWdGh55lcXmVzmhrWWsxqRXKt67S/hJJX72rYiwbtSaYFO583PPA5KVaZGbWnhgVzlobPmF2/xSu7k0qYlVZrGvzKH04zqycu941EJqhEoastsBjxM1A0UNV12/nMiZKiKka8Td0kQLUrs2Wkjq0WBvoJV/xLpVF9umKvI64x868AqjDeq4XSOycDGMA6DWek2hW/s27CcqhBUVUXc5JGJm9yLcsXa+0df+wtQRCDbcTiVt2WqE7aK0tnts6qRfbtOmhpzNa/+YDvN40A9ncNBnBel2zwETnhsYA8xXjYXoVu9TkdJMvuLJFkup2f1kqO4Jo9cfzLCWFl7zQHn+FHysxLzZfOwtbF8huWnQDotGawWuGx8Z8e7IEzLFwEZ4b1In447ZYTR7NZMiRIfs+jpyftBmCZK66sGq1ljAcKnQ6Ascl3Gp7ey122gPw9Oo02F8tuep6NTMH/0jiQLwslwHKTxKV98IT/FaTAeTv7ruPIXv/iFJf4D3T6oWUf4maUAAAAASUVORK5CYII="
                    styel={styles.image}
                />
            </div>   
            
            <div style={styles.contentContainer}>
                <span style={styles.nameText}>{props.name}</span>
                <span style={styles.commentText}>{props.comment}</span>
            </div>
        </div>
            
    );
}

export default Comment;