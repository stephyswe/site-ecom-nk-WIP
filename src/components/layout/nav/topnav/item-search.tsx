export const ItemSearch = () => (
  <form action="/sok" className="b b6 am">
    <div className="p q r s b3 b7 b am e b8 b9">
      <div className="b am s ae ag ah ba bb bc bd be bf">
        <div className="b an bg bh bi bj">
          <input
            placeholder="Sök"
            aria-label="search"
            name="q"
            autoComplete="off"
            className="bk bl bm s bn bo bp bq br bs bt bu bv bw bx by bz c0 c1 c2 c3 c4 c5 c6 c7 c8 c9 ca cb cc cd ce cf cg ch ci cj ck cl cm cn co cp cq cr cs ct cu cv cw cx cy cz d0 d1 d2 d3 d4 d5 d6 d7 d8 d9 da z db dc dd de df dg dh di dj dk dl dm dn do"
            defaultValue=""
          />
        </div>
        <button
          aria-label="Sökknappen"
          disabled={false}
          type="submit"
          className="dp dq dr ds dt cw cx cy cz at as du dv dw dx am b2 x dy dz e0 e1 e2 e3 e4 e5 da e6 e7 e8 e9 bj dg ea eb di dj dk ec e ed ee"
        >
          <span className="b am b2 dp ef eg eh ei ej n o">
            <span className="dx ek el em dy">
              <svg
                width="1em"
                height="1em"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22.5 21.7c0-.2-.1-.4-.2-.5l-5.7-5.7.1-.1c1.2-1.6 1.9-3.4 1.9-5.3 0-2.3-.8-4.3-2.5-6-1.6-1.6-3.7-2.5-6-2.5S5.6 2.3 4 4c-1.6 1.7-2.5 3.7-2.5 6s.8 4.3 2.5 6c1.6 1.6 3.7 2.5 6 2.5 2 0 3.8-.6 5.3-1.9l.1-.1.1.1 5.7 5.7c.1.2.3.3.6.3.2 0 .4-.1.6-.2 0-.3.1-.5.1-.7zm-7.3-6.5c-1.4 1.4-3.2 2.2-5.2 2.2s-3.8-.7-5.2-2.2C3.3 13.8 2.6 12 2.6 10s.7-3.8 2.2-5.2C6.2 3.3 7.9 2.6 10 2.6s3.8.7 5.2 2.2c1.4 1.4 2.2 3.2 2.2 5.2s-.8 3.8-2.2 5.2z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </span>
        </button>
      </div>
    </div>
  </form>
);
