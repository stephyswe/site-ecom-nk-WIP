import { CategoryImage } from "@/app/(site)/components/section/category/category-image";

export const CategoryItem = ({ title, image }: any) => (
  <div>
    <div>
      <div className="p q ms s">
        <a className="ar a7 a8 o as aa aw at au" href="file:///D:/dam">
          <div className="dp h0 h1 i2 h3 am b e">
            <CategoryImage {...image} />
          </div>
        </a>
        <div className="p q r s af y">
          <div className="b b6 i3 h8">
            <div className="d7 s">
              <div className="b b6 gl">
                <div className="gm s">
                  <a
                    id="RowLayoutBlock"
                    data-value="CategoryBlock|Dam"
                    className="ar a7 a8 o as aa aw at au ag ah i4 dx z i5"
                    href="file:///D:/dam"
                  >
                    {title}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
