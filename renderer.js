      async function getUser() {

        const profileResponse = await fetch(
          `https://dadosabertos.camara.leg.br/api/v2/deputados/`
        );
        const profile = await profileResponse.json();
        
        profile.dados.map(dados => (
          document.getElementById("repos").innerHTML += `
            <div style="display:flex; align-items: center;
            justify-content: center; background-color: white">
              <div>
                <img style="width: 90px, height: 90px" src="${dados.urlFoto}" id="img" >
              </div>
              <div>
                  <p>Deputados: ${dados.nome}</p>
                  <p>Partido: ${dados.siglaPartido} - ${dados.siglaUf}</p>
                  <p>Email: ${dados.email}</p>
                  <p>Ver Gastos: <a href="${dados.uri}">${dados.uri}</a></p>
              </div>
            </div>
          `
        ))

        console.log(profile.dados.nome);
     }
     getUser();