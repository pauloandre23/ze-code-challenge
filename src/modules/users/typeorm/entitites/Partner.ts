import { BaseEntity, Entity, PrimaryGeneratedColumn, Column, Index } from "typeorm";
import {
    MultiPolygon
    , Point
  } from 'geojson';


@Entity('partners')
export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: false })
    tradingName: string

    @Column({ nullable: false })
    ownerName: string

    @Column({ nullable: false, unique: true })
    document: string;

    @Column('geometry', { nullable: false, spatialFeatureType:'Multipolygon'} )
    @Index({
      spatial: true
    })
    coverageArea: MultiPolygon

    
    @Column('geometry', { nullable: false, spatialFeatureType:'Point'} )

    address: Point
}