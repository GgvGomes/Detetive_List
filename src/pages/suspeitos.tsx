export function Suspeitos() {
  return (
    <>
      <div className="grid-check">
        <input name="Sargento" id="Sargento" type="checkbox" />
        <label htmlFor="Sargento">Sargento - Bigode (Amarelo)</label>
      </div>

      <div className="grid-check">
        <input name="Chef" id="Chef" type="checkbox" />
        <label htmlFor="Chef">Florista - Dona Branca (Branco)</label>
      </div>

      <div className="grid-check">
        <input name="Florista" id="Florista" type="checkbox" />
        <label htmlFor="Florista">Chef de Cozinha - Tony Gourmet (Marrom)</label>
      </div>

      <div className="grid-check">
        <input name="Med" id="Med" type="checkbox" />
        <label htmlFor="Med">Médica - Dona Violeta (Rosa)</label>
      </div>

      <div className="grid-check">
        <input name="Danc" id="Danc" type="checkbox" />
        <label htmlFor="Danc">Dançarina - Srta. Rosa (Vermelho)</label>
      </div>

      <div className="grid-check">
        <input name="Coveiro" id="Coveiro" type="checkbox" />
        <label htmlFor="Coveiro">Coveiro - Sérgio Soturno (Preto)</label>
      </div>

      <div className="grid-check">
        <input name="Advogado" id="Advogado" type="checkbox" />
        <label htmlFor="Advogado">Advogado - Sr. Marinho (Verde)</label>
      </div>
    </>
  );
}
