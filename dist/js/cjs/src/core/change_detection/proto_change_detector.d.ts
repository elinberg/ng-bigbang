import { ChangeDetector, ProtoChangeDetector, ChangeDetectorDefinition } from './interfaces';
import { BindingRecord, BindingTarget } from './binding_record';
import { DirectiveIndex } from './directive_record';
import { EventBinding } from './event_binding';
import { ProtoRecord } from './proto_record';
export declare class DynamicProtoChangeDetector implements ProtoChangeDetector {
    private _definition;
    /** @internal */
    _propertyBindingRecords: ProtoRecord[];
    /** @internal */
    _propertyBindingTargets: BindingTarget[];
    /** @internal */
    _eventBindingRecords: EventBinding[];
    /** @internal */
    _directiveIndices: DirectiveIndex[];
    constructor(_definition: ChangeDetectorDefinition);
    instantiate(): ChangeDetector;
}
export declare function createPropertyRecords(definition: ChangeDetectorDefinition): ProtoRecord[];
export declare function createEventRecords(definition: ChangeDetectorDefinition): EventBinding[];
export declare class ProtoRecordBuilder {
    records: ProtoRecord[];
    add(b: BindingRecord, variableNames: string[], bindingIndex: number): void;
    /** @internal */
    _setArgumentToPureFunction(startIndex: number): void;
    /** @internal */
    _appendRecords(b: BindingRecord, variableNames: string[], bindingIndex: number): void;
}
