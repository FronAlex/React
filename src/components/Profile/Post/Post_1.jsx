import React from 'react';
import post from './Post_1.module.css';

const Post_1 = (props) => {



    return (<div>
        <div className={post.post}>
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEBUQEBAVFRUVFRUVFRAVFhYVFRUWFRUWFhUVFRUYHSggGBolHRUXITEhJSkrLi4uFx80OTQtOCgtLisBCgoKDg0OGhAQGi0lICUtLTAtLS0tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAADAAMBAQAAAAAAAAAAAAAAAQIDBAYFB//EADsQAAEEAAQEBQMBBgUEAwAAAAEAAgMRBBIhMQUGQVETImFxgZGhsUIUIzJSwdEHYnKi4UOS8PEWJDP/xAAaAQADAQEBAQAAAAAAAAAAAAAAAgMEAQUG/8QALxEAAgECAwYGAgMAAwAAAAAAAAECAxEhMUEEElFhcfAigZGhscHR4QUTMiNCwv/aAAwDAQACEQMRAD8A+GoQhAAhCEANCFSDqQqVUkqAXB0hJ0qATAXBlEVJloQArAS3KKFzFlVUrpVlRcZUyKTAVBqqly46hYRGi9PhjYXSjxyQ3L+nvS89oXocPgzHXsa6KNV+F42NFCN5LC5gxrW6huw1HsSsmAwTra/KaLq230Nn2XqYfhrC65JWm6GRnX3cdgvaxLBEGM6k6geuzfaqWSptVluxxNsNhcm5SwOJiwj3vLImlx10As0FrSRkEg6EbhepwziU2FlMkRpxsHS991p4h7nkvcNSbJ9StqlPed7Ww63PPlTju4Z+xplqZYs5aNFBCe5J07GGkiFkpSUwjiTSVK6SXbiNEEKVdJUuiNEpJpFdJtCSTQuiiQhCABCEIAEIQgATSTQA1QSTXB0AVqQqC4USAKghNKUSAKgkFQXCqRQTAQFQSFUh/HwqYFK2MM3Xa0snZFIxuyzKXBsdAAHcDU36r1gBFGABrrbhR9ha1YYmjWtenYeqpvmzNvQ9PX09VlnaWWRvpRccdWbmDlJ8hIqi66G5ob9hou3dgYpMI2bKc0PUbkGhr9lxHCMA+SVkY1LiGj56/C7vARtf4uCa87ANcepBBF+9fdeVt7Sa3Xli+mTN9NWp3lpj5a/fozh+K4djhJJE9wcAX5N9iM32Nrng7N019Nj8LoOJB0EtvBDmPLXNPUbH6i14/FYxHKWNADQBlI/U0i2n6EL1Nnytnw79H5nnbXG0r99TRkYAoGhvt3/ss0rr+ixkLYngYJRxwMZCkhWQpKZMnKJjpIhWVJTEmiaSIVJFMTaISKpSV0mySkqKlMTYkJpIFBCEIAEIQgAVJJoOoaYSCYXB0WEBAVBKysUAVBIKkpVIAFQQFQSlUgCqkBVS4VSLiIBFiwszTrpoLWFoWaNlqci8Ezd8YHfp2Vw8Qc2N8Qa2n1qRbhXYrXeygD9VWGhzOAG5/Kg4xaxNkFJySR2nL2DMGH/a5HWSHNjb2vy39PysHLOKccUDd27dbPM0vhQxYYH+FgDv9W5+5Xn8oN/+w33XmR8dKdSWt7dNO+ZocndLvl7W87kc8uzY6WMnQuI9jdX76UubxrczW3uz92fayW/kj6L3udHgYqTTM8yP32Hm091zRzFxB3vVbdjX/FB8Evixmr2Vo8l8L7xMIiO6kxraILiGMBJJoNGpJ/qVjlblJB0I0IO4PULYpGSUEjTKkrI9SqmeSMZUlWVKa5FokhSVRSKYkyVJVFSUxNklJUVJXSTEkmkuiAhCEACEIQBQQElQQMhhMJJhKOhhUEgqCUrEoKgpCoLhaIwrAUhW1Iy0UU0LPhMoeC8W29R3CxNatiOF3ZJJmiEcTNj3ROkJiblZ0BRAw32WMx0t1jQ0tyuzWATpVHsovCKSNcI3d2bDMHmGhul03L/B2wtdipQfKQImnZzqsn2GnytDgeBfNI1jDq46fAJI+y9bm3GkZYWu0jaAfWtyvLr1JTkqMXnn0/eRvtGK5/X7y9TwcfN4ry5wuz1Xr8EhyXIX0G0fqQB+VzTMU6+69duKJheNv4Tp6Panq05WUdMPknGad2szPz9wz9+Jw6hKA4H/ADHQj7Lj5Icp0Nk6XsvoHGWOxOAY9upiNPb/AJT+r4I+6+e4gGyq7BJ/17jf+cPT9EayW6pa5emXnaxRjLHCnU7o4GqPe1hxDQCdST1Pc9Unm9SUpQb++97+y3pamSbVnYwyBY1v8PwL8TK2JhAc7QFxofJWtisOY3uYatpINajTsU6lHe3b45+RnnF23tDVKlZSFJVEZ5IxlSVZCkpiUkSoKsqSmRKRJSKZSKYkyUJpFdJiQhCABCEIAapSqQMhhUFKoJSiGFQUhUEpWJYVBQFkCVlojVtUq2hKy0MzLGQt+Njj/CL+g+iw4Z0Ya4PbZI8jroNPcjqtnh7xnDTe9AhZ6jztobqMVdJ6h4Zc0mtvrpvosULSToDvr6Lo+KYNrS4x9KtvVuYbey8qRoaGva/zEHOKoDXQf5rWeFVSjdamuVPdZ2XJkNztd/IyR59SGmvyuf47IXzO9yuj5Tjc5j5i6hGwigKzHar7Lw/2UyyOczWrJB6LzqUkq05PRJdNfsvUV3bp9v8A9HmxYWiAeu69HEYOsNmi83n856gD+lrQkcXk9u69Tgznjz5soH6r0sVQI63otFVyspXyEUVbdRt8ucTMcpafMxwyuG4oijfoV5POPBv2eXMyzG/zMd+W+69DHDwpcQ5lUXsNN/To4kEdNSuhwGLix+GfA5oEgbbeoLwKzN7E9lmdV0pKtFeHDe9E7+V/QW+GOufTT0+L5Hy1uGc47a1YHXotV8ZBor2MTE5kpY8a+b4oFazG+IKdqe/X0917EZ66EKlFX3dTzLI2UOWxNA5pr7rXK0Jp5GCaazIKgqyoKYhIkqSqKkpyUhFSUykUyISIKSZSKYkxJFNIrogkIQg4CEIQA1SlUgZDVBSmEpSJQVBSFSUpEoLIFjCsFKy0SgtiAhawWVux+ErReDOlHB3WwuoMf+snRum59F03COWR4rHMbmAbZLv5gKGUeu/wvCZBI+XIBmsNOU6gOIsCvkL6Ry9pK2KxmA1P+mqHuAvntu2ipCHhejPajHcg5cMfTU4LjY8PEODTmDjr2Adqb9QfwvCaA52u35XVc9NyzSSNFBziAD/uP1/K5GEWQR16LXsuNFS5IJzvJeR9J4EwuwUxZXRtD2JXMYCKRkgAsF7t9qAvMuo5fcxvDHu3cJTdf6BlvsuVixLnSEl2rd29A26NfB+ywUN5uqtLlHbffX6R0mC4JE+B0zgcsjj4Y2PlJGnoT+F53CsXCzyujNNdna0+ZtgaZgOl69VvN4y58TiAGjK2OOMbNAsPr2FfJC0cS+PDsBc2y7zV6dBfqUkVN70ZXxeCv3587jUoSnfe77+biw3C34k5c1te8Okqg4gHM6u92V6PEMI3B4mKSFnhsecojJOa20b9dHAfC5vh/Fi2yXGzXtXt0XYP4lh8Vh2skOWVn71riNHZTsD0NfVPVVSnJXxjk0uevPTQKkF/YnHL64nP/wCIULIcTFKAMsrA4t7B4Ik1+b91x/ilrg3oD5T9wV0fNz5MRI1+pAADYti1gAFn3PTdc6/DEFoOmmxGo1Oi37GrUYqWdvz3zM7U1aOq79svI3uKwtDGvA0cLPubsLw8dg5IiM7C3MMwB7d13M/BvEwYLbtrQSOtGzf2K4riWIle4CRxdlGUE9B0Vtjq7+C0bT48hNugs+7nnFIrIVjK9A8mRjKkqlBTmeQikUypKZEmIqSmUimJMSRTSK6IxIQhBwEIQgBqgpTCBkNUFKoJR0WE1ITC4URSoKAqCUsmZAvZ4PgnHz2BtVnYkaE+vVedhcKX16mgO/f2C38bi3F4Y0+VtUOmiz1W34Y+ZsoJJ7zO+5TgBYcQDTIgaJ/U9oysJ+hPwtjlucOxThmJc4nzUQAdhQOqx4J2XhReAG55DoNgGtAAHouf4JjXMxAJPUarwVSdVVX1S8v3c9mc/wDr5d+dyeK4o5zHMTYJGvofVeTmF+VtVpXce67TnWKF0wcGizE02P5iDZPwRquJlBi0H13WzZZqcE0rX0Fqu9qlrX9jv+S4C/DTss1TXUehFg/YrUxsGHjcS5ozOblJB1F7n7LX/wAP+MkznDyu8szTHfYuoD+yjmLAvZJkGvTXfssThJbTOMna9n7W+h95Nt9GvS3yjGzCOrQghr7yg+anULr4C2+b8AXeG6OyXMbbOgrTQheHhOIyNNHzNPlo66enZd3y3i2PaI5m215poO4yjWj8pqzqUZKedr+/4zCNRJOS77zPmWLhdHp10B90RcTkjLXNOrdl9G45ylmjkmjcHhoL8tUcvt3/AOV8yxUFDMRVfgrds9enXjx4mecn/qLwRnkx0srvEc6zet7n/hbLAJZ6dJofLtq00A33C8iOJxINHKP1dPnsun5e4R4mIdKRUceR+vsCPe09ZwpxvwWnwdoylKV3p3+jqMRjG4bFRxaZWsawjoQKFH7rlOfOENw8w8Mfu3gPZfTPsAeoG3wsvFceJJ/EO96LoOaXCbh+HzVm8XQnoMmv9F51JPZ505WzwfzfyfyUmt5buentg/Ve7Pl2IaMxHbT6aLVK3eJvaZHZR+px+CdFpkdl9BB+FHiVcJNGIqCrKgqpmkSVJVFSU6IsRSTKRXSbEpTSXSYIQhAAhCEACoKU0AUE1ITXCiKCsKAqC4x0UEwpCoFKVizfwWJryOND9Lv5T6+iyzRC71BG49O47heYF6fC8ULDJKya0Tfk+RrX91CpG3iRqpTWEZH0rhDmzcILWm3MkcHAdi0OB+y5nheAlml/dMLi0ZiBV0DR06/C9v8Aw/xERfJBTg2VjjVggluunrVrfwkeAwswqSQvLqDh5SCdKoE2F4LqOjOpBJ3busOP7PZli756+v7ubPEuGyTxMkawh7W5XMIyuy660e2o+QuLx+VtNkoAjf8AlP8AZfSMF4xl2IAsGxQAAN2Oi5rmflYvDpYvOweYtH8YHt+oeyz7JtCjPcm7LT8fgvv7ycW1fThjo/lHIxsDHDKS1zSHB1adwQV3jMZheIwh7544pmaOzODc3Sxe9rhMZjSxoaGjK0Ux+/lPR3qFqxyROALrYRvlqnD17FenUoOqlLFNZNY58ufAhKUU1G9mu7d2OufgJo2P8BoJP/VbR9CG9vdepg5GxxQAyAyROcZNyS1/buR/VaHLnG4adhpH5I3f/md9zVuPqt5nAJI3iT9IcDnuwWn8rzqkrNxqYcMM8LZ+uCyZZqLlb054W+8jqsLxB4nEYZlaQDZ3eCdNO2p0918r5jw7mYqUMaXMMr/JVis+1L6xxLi0eFFStYDl/dudWYt7tDdcnqVxskuaV8jWsyuBOa7AzdR3Poo7HNwqOdsLW6kKFNzi/Da6WN73OZg4TLeZrTTjTowLNHpXoumxOFkw+FMTBdEGR+w10y99BQXrcPlgjiD2252Y274B0HylxfFNlgfIHZbGxAIdffuqVNplUmlbBPv0LK8PClr33+D55NgntkbZDg7UObdeo11BXR88zeHhMNhgPMf3pPofK0f7StDgWDdLMANQXDy+o2q16PPkQcDK6PSIiIXoS1rdCPS831Wyc1KvTi9Lv6XyRcVFN+ePRpfJ8xmeSSSsRKzYgAutu31KwPXvRPDm8WQSpKZSJTkJMRUlUSoKYm2IpFNJdJsSSELogIQhAAhCEACaSEAUmpTC4MhqgpCYQOiwqCxhWClZSLKC2cOLBA/iIIr09FqgppWi0XY7zkeWKKMzh/76CVjnxP0HhE1mjPe9HA9wu6x2CEUrcXh2CUuIMRGtXsR660viWGxLmHQ1YLT6tO4Pp1XZ8l8xy4d4jlswl4Bv9Lhrbb6/leLt+xzu6sHjw4rh6/Nj1Nlq76UXppo1n7Y+6Ok4zzLLHM55BEgBaW3o47OsVqtWDmaUZSNLs1312/K2OYOX5MRiMwcAJAXsebqtwvK5g4ZHhBCMtuDRbiTRcDdgXVagrFShs8lGNrtr65m5NLJK1u+Zsv4NhsaC9k2R5vyOoNcexcNR76rkuK8GkgcWlhaR8g+xW/i+I5nZmnKczjQ0GpuwvU4RzPI05XgPGxBAd+Vsp/30ldYrg9PP8izdOeEu/O35ORZBLTfITZpp767LscBxySCFmHmnblJBDQDJlaDZst0O1UL6r1eaOH4WTBnEwxiN4Ia5rdAS7qB06rxuUeCNlkfPKLiia3ynYvyime12SkqV6dek51FazytjfS2fEWmtzK+eT0fL66m9xCGTFs8eWchmujs2dzb0AB0azt7rQ/bGui/Z2HKW6sJ0Dv5gT36qOM8V8V7muNdBWwHt6afRc5M1zXFrtwaK7RoOS8b5pcPyWqbRuq0e+R1nLuIdldGf0PD3DuwjK78D6rq+FshnaWOjjdE4gZb1Fb/IGq5Lgsh8ITVepjcDs6gL13IOb7LoOBtLPPFHkaA4vs2Krck9N1g2pK8pZY8ddefTqDjvU8OGfep7/BuD4aCQvAp1HKM1hwAJBjvXb6LieaONumztc1oBP8NDaj99V5fMPNLjiWlhIEZygA6BvWvVc7xDiAlcX2ASdQNv+Fr2PYZqSqVM2vQw7TOMLpu7+O/o83EhoJAB9ytV5WSd9lYCV9BFHjykMqCmSptOiTYFSUITE2IpJpLogkIQg4CEIQAIQhAAhCEACpSmgBqlKa4OmMKlATXBky7VWoQFwomWCthuJdoCSQNvRa1otK1cpGbjij6Fy/z7PG1sM58SNtZS7R8ddY3jUextdfxCeLiUWVk8UhFZWuaI5mVuBtmH1XxEOpbWG4g+Nwc06j/wry6/8ZFy36Xhft30aPSo7ZC6317fX4a5ney8uvY8As1BFjcel1rSyHBOjOU5SQ4ERhpyGzqS4HX2tcrgebcXC0sjlIadwA2z7uq/usn/AMolcKc7N18xOh9KP5tSey7TfGz79vXzPQp7Vs7WLt30Ot5o42MPCyFoBeXiV38tAHyfUn2WXlrmrBkiARvZHJm8QvIPhnQtLSP4h/FuBuuAx/FjM0Nc1oo3mF5r9SSSVr4CTKSbqg4f9zaXY/xsP6XGV79ddH5acDNPaoupZf5++P4PonNPKj4yJIjnY7VrhtS8ePhbyWue3M6suX20aX/GnwFkHP2La3wg5jo2mmhwAGXsK1XkcQ5omc4lst3sQA0j0FAD5U6NLa7KErYa/ngWhUoq8qj9OudmvjA6DG4o4OIxeXOBmI08uY7lo2/9LnsZzNNIzwcxybvAJoi9cy8OXGOc4km8wIJ733WmHkbFbaOxRWMsXnfmZNo/km/DDBG3xLHeNIX5Q2/0jb7rTJSJtFrfGKikkeXKo5tt5jc5YyUypTEmxWkhCYmCSEkCgkhC6KCEIQAIQhAAhCEACEIQAIQhADQhCAHadoQuDJhadpoQNcLRaaFwa47RaSEHbjDk8yEIsd3mGZGdCFywbzKbLXqpdJaEIsc33kTmRaELpy4rRaaEHLklK00LpxsSSEIFbEkhC6KCEIQAIQhAAhCEAf/Z" className={post.img}></img>
            <div>{props.message}</div>
            <span>Like: {props.likesCount}</span>
        </div>


    </div>



    )
};

export default Post_1;





