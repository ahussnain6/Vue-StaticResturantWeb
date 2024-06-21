<template>
<div class="menu-items">
<div class="items-1">
<div class="item2"  v-for="item in array">
<img :src="item.img1" alt="" class="img-99">    
<h2 class="h-77 font-99"> {{ item.name }}</h2>   
<p class="h-88 font-99">{{ item.desc }}</p></div></div> </div>
</template>
<script>
import { array }from "../assets/data.js";
export default {
    name:"ItemComponent",
    data(){
        return{
        array: array}
    }}
</script>
<style scoped>
.menu-items{
        background:url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIVFRUXGBgXGBgYGBkXHxgdFxoXGBoYFxcYHyggGholHRoXITIhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0jICYwNS0vKzEtLS0rMy0vLS0tMC0rLzI1Ky0tLS8tMC0tKystLS0tLS0rKy0tLS0tLS8uLf/AABEIAIYBeAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAACAAEDBQYEBwj/xABCEAACAQIEBAQEBAUDAgMJAAABAhEAAwQSITEFQVFhBhMicTKBkfAHQqGxFCNSweFictFT8TOCwhUXJDRDY5Kisv/EABoBAQADAQEBAAAAAAAAAAAAAAABAwQFAgb/xAAvEQACAgECAwUIAwEBAAAAAAAAAQIDEQQhEjFBUWFxkfAFEyIygbHR4aHB8SMz/9oADAMBAAIRAxEAPwDzm5HKd9pmB/yTNABR2bRdgqglmIAA1JJ0AA61fW/B3ELuv8M+wEsUXQCB8RHIColZGPzNItUW+RWcPtwyku9smYuD4QI1k894I55gDHOPDeuBByrAJC6gFj6jl+Iiec8hWnw34b48lc3lqs/9XYc4yqYrUeHvw/u4W+t9MWhiQy+UTmBjSc3pOkzrVFmrrjFtNNnuNUm9zzjB3Rb8wMjXG9IgEqCjelpjWSTbjvuOVd/hvwviMabj4aFRfSSzFPjBlBE8tCOh71rsd+KeDS9cw+IwzNkdkLLkuA5TBMNB5bVseCYTDPbXEWLTWBcGYAA2c07MyKQDPIkVnnrJqGeHBYqY55nluO8C8RQr/J8zKAoyNbIEEmIJkiSdxzriv4HEWB5l2zcQFQjF1zaPJIQFcqwoiCZE99PdLN0mQHJjmQDUlxX5Kje5Zf2DVTX7RlJZxn19fsTKhLqfO4uKoHxBh6kKkrJI+KWHJhyHIido7LttGXNZMGIZXIGUM0KLc+ptAcx5A17Pjb1xN+Hm6P8A7dy03yAuFDXnfinxBhb1y0iWzhxndL8oEdcjL6WCSSAZPcitlOr95LHD68iudWFzMrj0KwhM5QY7SZI010MgzzmuV0IjQiQDqI35+1XfFsWrXPKtFMgARWQZQ5AyFhLSMwAEFiD86oXJ5zppudI051sKQwhImNNp77x70K7b/rQ/vT56AOmzdTQZjTgc6Alz0ZbSucUQFSQSZj39wKQc9aRY7b/cxQsO339akB/OnFCjR/kA0+Yd5oA/vShU0915oAe9AShqQcVCH+9qISN5ihJJI70gaiZqRYVAJ/nSE9JqEt7/AH7UU6bmgDZiDqIoGaedCW61GTQDstRGpM9RsagCDUi1NTEUA5+VBmpytdXDeGtebKhAOkljAE/qfYCvE5xguKTwgcRJoJrvucJv5snlOzBymgJlhGk+xB9jWhHhi0yeWrhb38sEtmIDQfMAjQrMQe5rPbraascT59m/1BjwaMGthe8GJ5oRXfIqEvcABJbSIXkN+Z2qoxPhm6GuhPUlvYtCFwIlgNoE9eYrxX7Q08+UvPyJSb5FRmBO0TyFX+E8G4+4AwwzKp1m4yWp+Vxgf0qywyLw23myqcZlzs7Qwwwb4Utg6G8QZLflmOs1N3EnEWzdvYq7nYtCkswgZfUTOg1O3TnV8rknhbm+n2fOceKTxnl2j4/wnjrKlmw75Y1a2y3BHfyyTHvpVVhLkbQR32n947VY8I47icKyvbusVmdWzDusTv8A99qveKWbXEUuX7NsWsXaXzLltYy37Y3uLGguDc9ec6GvULVLYrv0VlSzzRn/AOKe9Ae4ERdYVQsRAmB8R26mlVbA3Jmdo/vzpVaZDku3mUhlJBBBB6Eag/Wth/73MaoA8iw2m8OJ7n1Ufg/EcIWyTjGDXiTo6vlUA6QRptrW84BwnheKQvhsNZuIDlLG0InpLbnUfWudqLYcWJQbL4ReNmV/hnx5buYT+IxV5LbZmVlU5QuU6aGWJIg/OuseKMpz+RdZDBByGdex11qwfwDgw63EwtpHUypUQAYInL8J+YNGvAbxvBnvzbGrIbdv1dBnXYddK4t9XFPZNeP26/ydCqcVH4sHbwa3YuWxdTDLaBk62whPeIn503EuK2Q/ltdVTzkxl/zXTjsSYFu0NebiCFjp3/QVVYHwwmYXHZzrJVsvq7k7x8682Tc/+cd+1iuMF8U9uxHLfxyWmU2sampjJcykN89DPzq4wvHLT+i6Mjd9R7huVc9zB4K6CJslNiIRlMb7g1FhvB+HVg1vEuq/9MMhT5BgSPkRtXmEJrKjjw6fkmc62viz49Sww1627HysXsdVLrcB+TeofWvLfHfhRsNN7zvOS45YkrqrM0xIMBTmJ/8ALXrWIwFhoDFG5ahTWP8AF3gtsl+//FEWFQMtoKcqlZlmENIjoNImt+inONiSxjrv/v8ARku4HHO55fcv/CwzZmDZnJIJJlCBB+EDnAPqIMwKjxF3OQcqqREnQToIJG0aTtzJMzU+IwxUwWR80QxbYKQuafyqeU/lg9KC2lsMA0wFfNrILQ+XKV/KTk/XWK+gMJxsTO8/XXvypT96VJdSDEg6AzB5gHYiaZaABaJKTkUlHagHipUOlRzTho5/rQBUjTB+9Eh71IGy9Zoo6A99fuKB213/AEps/vQgMGkfvWhzUQFAOKcry0+o/ehApNvFAOyEUA+9qdh7GkPahI6AcwD9R+1NJH3/AM05pMoigIyaGnihY1ACD05NRml9KAI0lpgTTHvpUAljUAbkgfWu7guD87EC353kZfVmyl/hI/KCJnfU1V2LnrHYj9NasOHY+9aus1jVmUqfTJIMEjqNuXSqNRxOtqPPB6Syj2i/hmKZrbqJA11EiIMVQ3OBCWcSCpge+4J95/SqXhHErrLbOUxdcoBGuYQDlO8Cf3q0XHAZ89w6syTO4ViAdumo7GvjJQnXLHrJ4bw8PmgMFiyb5tHRiNTsNK7reFTzrYK3Ju3FttlB2La5uWSFIM8jVCilLxcMvqMBg28SACN/+9SYXjDWsQLdxGB8xIJkGc/I7EaCR0q2uC44yXTDf9kRmYnxNiWvYm8xOrXrh1O2sfSANe1V+KuSoCrlCoAY1nLJJJjmSatfFXDTYxN22RALF0b/AEsTG06Tp8qps9waxI9pHP8AzX0UJKa4o75PrswwmuWNiG2pO8gRJ0M+9aT8OMSq8Sw5BIGYqc35g6ssdNyNKok4hc1AhQwhiFAkdKu/BV1RibbERbsE37rQNFtjNv3IAjmTVseZmtw4Sy9sHLxmz5WIv2hGVLt1B2CuwH6RSqufGm9de62huO7kbwXYt+k/pSrefOnE1oda9I/DK/iLli5Zw98I1o+hGX0sGljJUgzObXWvPL9vQbEkTuPTBYEEdTGx126itT+Elx1xVxwYtqgznuzAJ/6vkDWD2hBOlt9Ny/TNqxJdTR8d8d43BsUu2hpzzFdzGogx+tbrhmNuYqzbYIbYcAuWOsRPpPP32/auniHArGJYXLqKygDOCNGyzlDTuBJ0oBxDzbjKoy27azp+Y8vlANcOyMFFRxu+97r+cd5vTy21/n57gcRjggLP/Lw9sAlzvcJMKqjff66cqxPHvxKvg/yLS2kYkKzepzGkxMDX3rl/FTjDZ7FgFgBb85v91yQs+y/vWQNo3Ez/ABC3bDPAAIAYKASBPXU9RXR09PBHPX1t9DZRTCUeKSz9v9ZpMH44xzsVGMDNr6GRSrQM2XUbnUUhgsNxdGFkDB49QSFQlbV+ORUaKZ5jYnWaxiXbcjQ77jp996s7N8IyX7TzcU5lGqlT0J/MO8684rTGeHvuWajRQtr+BJPuRb+O/BP8NgsNfRCz22CXREn1Akluchlgn/VVVwbiN0WiC1wjWQHKiQ2VluD84Ksvp9hGpr3DiNlcfgMu38RZkHo0Ag/WJ+deDYe+9tipYowcljEsGBgzrrqJ33UHlXrTRSzW3nH97nz9sm3nl+thPbTNpJWYUGSzaRJAXQZtYMEg7UsXd/KQIBYqcqqSG1Eldx0EkCTFSm/AlrQUQCIVtdLY+JyYBIzSP+oRsYHRiMDlNu5mdrNxELsYEZ11tkjMJ0Me6zBrcUFUzyfXO3udvTvy2+W1PftskBgRmAZSQNVOzCOX/BHKo77gmVEDYCOQ0kmdWO57nSBpR4K8EdWKK4BkowOVtIg5TP68hUgEb9aeKeIOs96jnXnH3vQDzSDd6DNUiHeJoA0b7inJoc0xqfvpTT70A5blIpgBTew/vRA96kgX1p83ah+dIHvNAGpFEHioAKOKAMNzEfUUbdY/vUK/WiB60AU9hTMaF4oJqAGaFqbNrSoSOoFIimI5ff1pi9CAgtPB70Kt2pORUEg4ezNzeNCfoDWh8N8EuMy3MxRV1zDckRKrrvB3233ql4UJf5N+xrecN4ext+VbR2ZGlmIChR6pjnMxueWka1yvaN8orgjzf1LliFfF1Z34LGMPSZ51R/xCfxBa6xZJY5RuNhI6jQadBVj5wYwd9iDpHaqbh/Dme8VKiFWWacpyjfLAMnYcq4ca4xbk+wy2b4wd+JFrEq1zy3UI6nzFOrKCS0g+3TQkd65eHY4PiS1xoTNmAPMg+hQeu0V3XcWSv8PaZlUrEE9AQNe/96XhfBqjNbb13jsgnTMDDBooniD28F1wxGtyksFPxviSXjkxgaFlVdAM9qOUH/xF6g69DVQvhxrpnDYvC3l5fzRZYf7rd2Cp7a16VhvBFoHNcJYkzBM9zm3n9qjxvgXCOD/LynUgr1MctRHbvXRo1Ma4qLi8HbojbCOOP6HnL+F1ta4vH4WyvNUuC/cP+23bn6k1y8Q4paKfw+EttbsTLM8G5eI2a4RoADqEGg39tjf/AA3sEyCdRsBBOhEgjT6jlWV454ZuYRln122Eh/ro0bHStteqqsWI8zzbC3PxvKMyjxSoVNKuicssLiqYUNlmAWY6CdyYBMT+lemeCcFaXhIK5fMvs0sDJJDFVB6GOXLWvNbuJzBUC6w6kjQtm5emJA6HfrEAaf8ACvhOa/cvNMWRlCmRld5kweYUf/tWD2ol7htvGN/HuNOkeLEescExIP8AJYnKDAnn0k86jx1g2DfJ2IlT2jb5a1mhxtR5ttGJuIZGm06Kf0P0rt49x25ewRdlAYW22/MY5V8/DeOJLfp9f66o6kotPK5PmYb8Qr63MTavDVL2GsOvsUA/Qg1S8Bxyo7Jck23U2rgG+U8x3BAMdqbhGNbE4a3gj/8AMWGbyJMF7bSzWQT+YNqo5gwNq4XtEnmGGhBnccj0NfR2RwyzRWcdSXZs0dfE8Nbt3GS2QyrENBGYHWSD7x8qLD4YgZ29O5APOBM+231pPibwyKxB8sHJopMMNRMSw157VovDHhe7iGW9dV/IBBZoJa7z8u0N2JiJGgnfSq5I3K2FSzJ4S82a/BeJRg24ThrrQLuGfOP6TcZDZJ6fCw/81Z38SeDm3jM6LmTELmUiTDyA4AG52Mf66s8Z+HeJ4hi2xmNuDCpoEtIQ7oiD0KG+BSNzGbUmtdw0i3akXxcVQ2VyAwg+kHTfXpvWbUalae1SjvlYf59dh86o++4m9t8+Z405UlxlFtDKgDPIIAjMSCTJUiDsXJ5V1YfhwuWWJlrzSy2wp0WU9YS2vpzaATlB9ETMVNx7hlzDuGe0lxSzHzPWVulgJBggrqC2XQgk6kVyYC4MpUMUVZaWXzAJIBPpXUj+XE6ZspEGI7FdkbIqUXlGKcXF4ZWMCVJIkl9WJ9UxqCszBkakbjfehAA6132mJzLbYKrCCHyINWLAAsSANF5zNV/3rVhA79YOvON+v7ihbb/E0pp/nQDAUYpsv3pSihAX3vTGOQpgpPLSiI5/KhII05CmkUx9hTCfv/FCB5p0+v1qFtKJHNASjSimowwinDj2oBaGjBjbbuKbSNvv60wHvQBBu4+n/NA/y+gqT7FCfb7+VARZqIN3P60iKS0JDI16/Lf5VEflRo0dqRUa60II6RakaAwTvXlkmk8CWg2JMyVFtpykg6wPSRtqRXonDeMYbD2jbtgnUlmdhIneTXlHA3KsxH9J25/4rrbgdx7guXJCxsTv8uQrj6ut+9c28LGC9UuUUy74x4hsMc9tDv8AFtm7idY+VS+GOIC/5lw+SgQMGDXYfKAGzKIAO3PlJqhtcIu4u8LFoabk7Qo5n9q2Kfh7hwkOdAOg3jkdwe81jlTVwYeSHSsmZxuKDkMjCBzEbVs/wwwim3cvQcxcpPQKB++teH43hrLibli1mfK5URJmD2r2/wDB5Wt4V7TyGVyfVqSHVdQN433rRZpYQgknn8E6d8MzZ4hTv99NxXEwG/Pofpr3rsvke56f4Fcpcf2nb35e3Osc0snVrzgh6CR11EgQO2+lV3EMLbdWVoZCNFbbcTv2/au7MNeY+g59ee9V2LZVUzqOonSYjT61VlrDL0s7Hh/FcD5F+5a5KdCRupAZTr2I1pVe/iBrfttzKFf/AMGbeP8Ad+ntSr6eifHWpM4N0OCxxRS4VAbiyNFMsdT6dBrGkA8/9XtWo8Gm4mJs2EuEecbnmKp9LjKzZo3B2EdtayqXQGnQCRqVDwJGsEa16/4d8M5MbhsULyXbdxGeVRU3QgGBy12Ed53qvVygoOMupNPFnK6EnDeDKmKvIUZma3aYAQJg3tJJrJ8T461nDeViEKeopt8J1OVh2E69qsvEvjD+F42QT/KFu1bJ6H1MG9vWQfrWt4/4Ws8UtqSTblkZ2QA5gu412MEif32rhqpRsSnyeGvDu8OzswdFXPhbXp/s8l4v4Xa9Y/i7AJyiZGzc9D1jWqOz4mukDzkt4iPzXMweByNxCGb3aa9p8RcbwmEW3wuxkQ5ZKjZACCASfztqeuhPOs1gvw/Rr74gKbimGCrBUMZJPU+3L6VrhrFVmFmWucdv4/Z4dMp/9YPh6Pf15FZ4G4zYu38rYbDWSFzBrzO+YyAMouMF032NeuYfiK2/Uz+bcI3kHTooGir9KzVrwDbIS5cA09RQiYI+GB17davrXC7VtBeuMq2Audw3pmNf5hOyAaxz/fHdqLLrFwZX2Xee2opfHLi+/gZn8RuL3Rw/EPfi2Lp8qwiElnB3dm0gQCcoGw1JmqvxU7/+zkw9nMWuZE9IJOW3DE+nb1Bde9RcVwN3juLBAe3hbZhXI/JzKg7u36QJ7+p4XBrh7It2UkgQoLanlLOf1NXTrUJQbeWm2/LYoU8xku3ZHz2uIxWQ2791mgBsrEabRtrMHY6jXpR3Xzf1Fj8UnUnSZ57zvuTNXPiHjuKxV/y7tpbDI7WyVklQTkbPcHxLE8ogmqa4/mZVVfUAAYBYvAA2JOgyiAO502Hc06xD5VHuX6MVjbe7yQNAUeoEtqRG2pGpPPQHTkR7VCTXZirwYABU0hVYZhPwkj1GGjbbZhPKuJmEARtOvv8Af61eeBZqU0IBG4j3ovpQglR45fOhLa1CTT5o+xQEpu67/tUbN9zUYP3pSLUA80xPtQM9CTQDsacUNEpFAGKkjSogKIUBNbGuwowv2K55p89ASlTvE0opvN7/ALUi2s0JHim+dGz9hUU/f2KEDzT0OanDVADusTvH0j9qhjtUgFCUJgDUkwB77UJNL4L4UXLXmHoXQD+pv8Ve8WuKiM7bD7AAqxtWRYsraH5RB9+Zqbg3ATfuLeu/+DbIZFP/ANRxsxn8q8upE8teDd/2s4nyNsXwQwWfgngpw+HN24IvXvUVP5F/Kny59yan4tdKqQoBY6BepJjlrpP3FWeJxIRDcc6Ac/vasPZ4muJtnEi4YLsoCCSoVsoDDnMM3swrNbB2yUY8uvrvEU28dpXPwzD2hOTM+diSZMMdTHMjb4p3q18KcbCXmViqK4AA21YyBHKAGme1V9676sykZQCwhgOokxpm30+tUF+5mU8xqZ6EyFkR0G3zrco7YRsUIxWEj12/eXeZnt9/2rjvJpBEGN9RlHcc9QdtdD7V5pwvxfdw0Jdm/Z/K+hZRGxI1cDffT9tRw3j1i8JtXQxEGASGX3U7e8VktolHfGUe65rlncsb18rO8fDI01M7/KaqeJ4qZVfTvpz23mNZMad6O5iTM7jWZJM8vUQddz9aoeOcYWxmaczmcq7xAMTOoAj6Cs9dTk8LyL52KKyzIeLsQTeVCZyKPq2pB+WWlVI9wsSzGSTJJ5k6k0q+mqh7uCj2HAtnxzcu02PhXwc3EUuG3iLSG2QCrBiQCJDafl5T2Nei+DOB4nDWVt3blp/LLKmRiTlJ0EECD2mvE+H8Ru4a6LtpijjbXQjmrDmp6V7N4V49hsWEvgsjppdtg6gxzj4kOsHtyIrle1YWyjh7x+zNWkcc94r34XWsTjXxeIus1tireWBEwoUox3gFdxEzFajimPNpFSxaPlrClkGigaAKo5cpA0rkxPiyy5ZEYwphgFOb5zED2rmwnim2kqttvnCj9OVc67UcSVaykljP4/PU1V6eXztZ7js4l4UwuJ8u+bMXkWFYiDHRhz5wdxJrmHEGwzMfL9KkKYMRAjfmK5+IeJMRoy20yjUiTJ9j1q0sccyqhu2iBcMAFQ0yAdR8+lUTmrHHLxjr+uhdCuUE8rKfTIWD8WI6gi2faRpVrh8Qt34rYOxhhIGuh105GK4FGDtglcPZt5jrlQJJPP0jeu2xjE+FPiPwj2/tVnvGrMcaa8NzPZGLj8MGvqdl26F9KiWOw/uegqk4z4mw2DuW7V66Bdu7DsPzH+kch1NQcd8W4XAMEvXgLrjNEFiB1IXYbxtMVmb3i3gbM13Kt++0nM1gs5PL1uCFH0Fa4QnPdp92Fy/L7fIz7IvuP+CLGM/+JwrhLxhjMslwrEeYvLYbV5Xx/gV7DHLiUFss5jZpEeplK6FAcsDcbRvQcG8aY3BMAjC9bMtkbTJqTkV+gHaOQq58S+Pk4jhlR8OUYXAcxMgRoRKidQTrHyrsVO2GIyX1XL9GaSi90zJW1BDB3K5VlAQTMkaDpMz0iT2MTADvtt3HWuziWJS4+dcw0iCFAABIUKF0X0hJEb5utcDPWwqDuMSd/qZ0A0EnsIA+VAKanzgcqkgE0xFMWoWnpQCNCT70ppUA5PehFJiOtNNAI0wNKaRNAGr0QqNaMVACp81MxqOgJiacNUQqQCpAQNEO5FBTmgHNMKdD9mjHtUEiSunh9wLdtsfhV0Y+wYE1yMaIdZqGsrAPYeG8NGIc3bmtsHQf1H+4/etUzDoFUaRXn/g7xphbOES1efy2tyuoZs0ksCuUHUzEdqq/E/im/jj5GDzW7RkG4dGYdo+Bf1PauX7pQbTNtdVl3yIrfxV8bC8ThLD/AMsaXGB0JB+AHmOv0603gaw1rChnIy3s7J2AzKw9/SD8+1ZjH+DL9r1aMo1JXWPp/eK0Xh66xsvZWQqwwOsKf9ZJiNDCwZzGlzjCtcHLO/2LHTbp5KVix66FlxS/6jlkACIGzE8xsANN4+dVGJttOadYkDWBPxGOS6j3q1vYzMQl1SjCDLSFYDYoQPUCIOg964cWFglY1Gw1BMxty1j5fSoT6mhNSWUyrF06g+rlvMe089648VgRnlZTrlkRm5acv+as0w7yRGoBMafqd+lR/wAOwXzSGCggEqpZRIO8aT0JNWxz0PDjk5Gwbk+u47cvU7azG+Y0OLtx/LgCA07HWDzHKpl4qF9M+rUGQZmZJ39PP6VxlhnOV83pOsEScpnf5UeepS+HOEUo2mlQoJpVuMB1XwsGdf6TMQZGpHMRIjTcdIp+FcTuYa6Ltsww0IOzDmrdqfE2nhc0CVBWMvwyYJy85nfXQcopmAEspyQCRz7Zduh3NJRUlhhNp5R6ng8EcRYHEcKTnggodM4Wc9sk8wfhbafc1qeDcPs42wmIw90MwkEEZYP5rdxR8LA8/wBwaz/DeKW8Fwi2zgwqW1IG5N4gsR8iT8qzfh3G3bHEBcwjsyXlLMEAZGjncB23iRBB+Yr5uNcJOXEvhWcPuXTy5esdbjs4Vh77ZN5jlCBhbX+Ysg2SQCT0Xp+2s1qsa9sWc1wwFymY2kRp+1BxHChl/iFQF8oBPPLvHuKWBuBlKMBsJU69ue+lZf8Azs4XyfI9SlxxUuzmZjCY7zbjMSCqMIUGYGhGbvWhTFr5f8gDzXBOi5sh13HvoAYqsw/hLyrr3LVyFeCVKxtzBB71S+OPEF7hfl3MNatsl/4i2aQ6qo1g8x//ADU00ylbiPX08fYXWw4c+vqUC/hTjb9xrmIuJmcks7sWZj1yrIA20nTarAfg75Vq5c/igXVGYAWyASASAWL7fKqQ/inxS8YQWLQ0lisZQSFDMXYgKCRJiubC+JeL3rxQYrzD6kAQoFuEyJt5QpIA9QPKBO8H6OEbu45bcSoFrZygyECJzAH4hvudVaY5g7VAl1FSAozBiZOxERly/UzPTpNX+M4FdRRbLI5UbFlOWJDBYbKF0QHWYg8tM294sTEKGiRso5SR8z7TW0pE7A6gR1A2HtM96FaZGGoLBYEjSZOkLpsT300qPOe9AGW11mmZweR+s/2qIOaHPQEhqNt6MHTczpH9z+31oTUgdWpTUc0VAMaQNPQTQBTTCkKQNAFMUWao6eagBhuRpog0FEWoCULTqKhDUSv2oCUGKIXJqIMKWfpH6H96AlBow0fZqEN1ipJoSG4p561G+00IagLzw5gluO2cSoifl9j9auuDcHGIZjlyqPUPVAUbKIB1Zu8RB9qpPDWLC3CraBhE9zV7i717CqHVyvqgQSVCwAPSxJJgc9p+nH1fF71o+s0FanpIKLxzz45fryDfFfwylHt3GGYWy5BKyeQ5EjeNay/iGx5d0WxI80enQ/KR11P0q/8AEfEruKu21ZXt2QFZVOhaYM9yTseQiis40pd83zLdtwAFLKrEAHlmkz1NV1Pgkm/qbZ6eeqoecLljs5/XptyOTD+Gsdee2b2DvuiAFXlQRzkh458o2gd64OIree8yIi2UUsH8xswXK3qLtMCO3XSvS+E+NGOVb7K1tjHmp6cpP9a9O4qr8V/hDdv3WxOExC22fVkYsAT/AFZ1k/pWuFUJ/FW8Y9cj5jWaezTNRmsdjXVeu3cy/D/B3EcUhuWDhigYqWzblfaZrdeE+Dtg8I6Yhka8zsSVM6aQAYEjLHLnWi8JeH34fgRYuXfNuFmZmkxLchm1gAAa1TcYkxB3vaeypBP1MVsrr4V3meuUpdTzPx3wJIN+2ACPU0CMwnUkf1DrWVwh/Y6/I16P4ouLkcHb1T7Zdf7V55g9FJ6K37V4u5F0t5ZKtDz6UqVvlSq455Yoo1mdtIjflMjUUTISglZTNJ03iJAeJ2I0B5iojdmdBy2nSAZ5867sJcs+Uyu10Xc65ICsgUiHLKTOfaCOgr0DQ8V8bYV3t27uFa7YRszLOTMQsKcp3Ak6NHKr7gnFRjNMPhXtW4jPlRFHYQZPy/SsLwI4VMVbOJTOkwUP9bSAWERkB3Bjcbwa0/iH8R0UG3g0BjTOVhV/2r+b5wPeuPqdItq64vxzsbab2vjk/wAm6v8AiqxgraYe9iPU0xIJMd4Bge9EePcPuKY4hZGdMrRdCHWdVMyp1rwK5ce4xuXGcuYOYkyZ5ydfaiXCba79oH1J61K9lxcVxSba9bHl6p5bSPc7fFMFaMJxMGNw2IDnTeZnbWsv454zhLkHD429elhmtCWt6CCykgAHlAPOvNsPgwZ9REAn6DbTrt86tMBgi2UW1JJmRIGvIAGDyOskH5EVdR7OjVPjTeSuzUOccMYXCgOgOZfzLMdGU9d9R1Iqxw15VvK63HtqWGuXK2UtBJVZSPi0kj0EdqrcRc5FgYjnmgGWie2bbrR4sjN8JtkIsq0j1AT6QBIBBEAz1J1romc13jLjlt/KS23mC2CBe3zB1OYPlAE/CIA2JBjasRfvzETAEAHWNSYHbUn3JqJ7hiJMTMTpPWNpjnUU0BOLhiNgfrzG+/M6UxPeozFMz0AZNNNCp502egJg1CzVEXoCaAlmnDVDNLNQE+9ATUeamBoCQGnDVDNODQE80s1QhqfNQBUU1GGpyaAOaMVEppTQExNDNDmppoCSaMN9xUOaKIN2oCUMaeda581PnoDtRwNOv9q77XiF7QysvmJyPv1HL9qqFu/XlUL43WG0I7SDWe2mM3ujfpNdbQsQePsbGzxHOgvGJbLlB5SR331mrzhXCjdulr6DymBOxE6aMpFYng+Nt3ENhzAPPaOYOvyrQ4C7iLdo2Q4IJ6noDnE7HlE78ornWV4+HkfVvWStri4bppLK6PqFdtLaZhZueZaJ1kcyIO5E7D6zW98F+LGNlbRzMygKCAWkDQa153xriKpaGcjP2/vWITGsGLLdZSST6WZflpWjSRcW5GD2vdX7uNct3nPf6Z9H8T42NPNcW50AJGZj0RASSY+lZPi/iFM0INYyqvMD269TXkFjiGVxcLBnBmXOaexzbiuvE+IHdSvmKoO621VAffLW73nccFSiiw8UcYN0+Wu8+qNgB+UfPeqU+lT/ALT+ulQ/xajao72JLdh0qpqU2eZTXMLCIJE8qVFYtnlSq8ykeapbfqIA5kDXvSpVJBFd9RhRHpE94Ek7cyD+mvOnsgDcToRHL5/fT2p6VQCYMCQWkmJbUCY6QIGkdefWnZ51PxHXQADXsNteQpUqAlVsxKp6QQZkg7S28dNNImiu6MragEB1AbVRnYRmjQyDrHftSpVIEmIEglAQNIkid9z1/wCNqjuXyYnkI9wNp/b2AHKlSoQRPcqMvFKlQkIXKYtSpUAJNEppUqAZmoS1KlQDA0i1PSoASabNSpUA2emLUqVANmqRTpSpUA86U00qVAOWpZqVKgHBosxpUqARenD0qVAFmoA1KlQEnKadlDb0qVARDDxqCRTnit5fTnMClSrxKKfNFtV1lfySa8Gcd66zGWJJ+9ulR0qVDzJtvLHC0RsntSpVJ5EqVKiUqVSQdCmBTUqVAf/Z) ;
    background-repeat: no-repeat;
    background-size:100% 100%;
    margin-top: 20vh;
    /* border: 4px solid blue; */
    width: 99.9%;
    height: 60vh;
    display: flex;
    justify-content: center;
    filter: contrast(130%);
    align-items: center;
    flex-direction: row;
}
.items-1{
    /* border: 2px solid black; */
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1.7rem;

}
.item2{
   border-radius: 1.7rem;
    width: 20%;
    height: 93%;
    /* border: 2px solid #ccc; */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.img-99{
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 1.4rem 1.4rem 0rem 0rem;

    /* border-radius: 1.4rem; */
    /* border-bottom-width: none; */
}
.h-88{
font-size: .7rem;
}
.h-77{
font-size: .8rem;
}
.font-99{
    font-family: "Questrial", sans-serif;
text-align: center;
color:orange ;
}
@media screen and (830px < width < 990px){
    .h-88{
font-size: .7rem;
}
.h-77{
font-size: .8rem;
}
.items-1{
    /* border: 2px solid black; */
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 1rem;

}
.item2{
   border-radius: 1.7rem;
    width: 25%;
    height: 93%;
    /* border: 2px solid #ccc; */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
}
@media screen and (760px < width <= 830px){
    .h-88{
font-size: .7rem;
}
.h-77{
font-size: .8rem;
}
.items-1{
    /* border: 2px solid black; */
    width: 90%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: .5rem;}
.item2{
   border-radius: 1.2rem;
    width: 30%;
    height: 94%;
    /* border: 2px solid red; */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.img-99{
    width: 100%;
    height: 55%;
    object-fit: cover;
    border-radius: 1.2rem 1.2rem 0rem 0rem;
    /* border-bottom-width: none; */
}
}
@media screen and (445px < width <= 760px){
    .menu-items{
    background-repeat: no-repeat;
    background-size:100% 100%;
    margin-top: 10vh;
    /* border: 4px solid orange; */
    width: 100vw;
    height: 90vh;
    display: flex;
    justify-content: center;
    filter: contrast(130%);
    align-items: center;
    flex-direction: row;
}
.items-1{
    /* border: 2px solid black; */
    width: 80%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;}
.item2{
   border-radius: 1.7rem;
   width: 45%;height: 45%;
    /* border: 2px solid green; */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.img-99{
    width: 100%;
    height: 60%;
    object-fit: cover;
    border-radius: 1.4rem 1.4rem 0rem 0rem;}
.h-88{
font-size: .6rem;
}
.h-77{
font-size: .7rem;
}
.font-99{
    font-family: "Questrial", sans-serif;
text-align: center;
color:orange ;
}
}
@media screen and (width < 445px){
    .menu-items{
    background-repeat: no-repeat;
    background-size:100% 100%;
    margin-top: 10vh;
    /* border: 4px solid orange; */
    width: 98.5%;
    height: 90vh;
    display: flex;
    justify-content: center;
    filter: contrast(130%);
    align-items: center;
    flex-direction: row;
}
    .items-1{
    /* border: 2px solid black; */
    width: 95%;
    height: 95%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;}
.item2{
   border-radius: 1.7rem;
   width: 44%;height: 47%;
    /* border: 2px solid green; */
    box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
}
.h-88{
font-size: .6rem;
}
.h-77{
font-size: .7rem;
}
}
</style>