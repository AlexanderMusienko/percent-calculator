import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { FC } from "react";
import { copyToClipboard } from "../../../../../../shared/utils/clipboard";
import { toast } from "react-toastify";
import { Copy } from "../../../../../../assets/icons/Copy";
import { Count } from "../../../../../../shared/components/Count";
import { giveMeSomeMotivation } from "../../../../../../shared/utils/auido-motivation";

type TCardInstanceProps = {
  headerText: string;
  result: string | number;
  children: React.ReactNode;
  unit?: string;
};

const copyOnClick = (e: React.MouseEvent<HTMLParagraphElement>) => {
  const text = e.currentTarget.innerText;
  toast("Успешно скопировано", { icon: Copy });
  copyToClipboard(text);
  window.dumbMode ? giveMeSomeMotivation() : null;
};

export const CardInstance: FC<TCardInstanceProps> = ({
  headerText,
  result,
  unit,
  children,
}) => {
  return (
    <Card>
      <CardHeader className="flex">
        <h1 className="text-xl font-bold">{headerText}</h1>
      </CardHeader>
      <CardBody className="flex gap-4 flex-row items-center">
        <div className="flex flex-col gap-2 items-center sm:flex-row sm:gap-4">
          {children}
        </div>
        <div className="flex gap-2 flex-row items-center flex-grow justify-between">
          <p>=</p>
          <p onClick={copyOnClick} className="text-xl font-bold cursor-pointer">
            <Count end={result} />
            {unit}
          </p>
        </div>
      </CardBody>
    </Card>
  );
};
