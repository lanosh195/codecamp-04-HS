import { BaseEntity, Entity, Column, PrimaryGeneratedColumn } from "typeorm";
//상속
@Entity()
export default class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment")
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "integer" })
  age!: number;

  @Column({ type: "timestamp", default: null, nullable: true })
  deletedAt?: Date; //<<삭제된 날짜가 있으면 삭제 된 것 없으면 안 된 것.
  //isDeleted: false
}

//Entity -테이블 @- decorater  ?는 있을수도 없을수도 있을 때 !는 반드시 있어야 될 떄
